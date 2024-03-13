import React, { useEffect, useState } from "react";
function DisplayPost() {
    const [posts, setPosts] = useState([]);
    const url = 'http://localhost:8000/posts';
    const f = async () => {
        const msg = await fetch(url);
        const res = await msg.json();
        console.log(res);
        setPosts(res);
    }
    const [post, setPost] = useState({ id: 0, title: '', views: '' })
    useEffect(() => {
        f();
    }, []);
    const deletePost = async (pid) => {
        console.log(pid);
        const updatedPost = await fetch(`http://localhost:8000/posts/${pid}`, { method: 'DELETE' });
        console.log(updatedPost);
        const data = await updatedPost.json();
        console.log(data);
        // setPosts(data);

    }
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const AddPost = async () => {
        const requestOpt = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(post)
        }
        const updatedPost = await fetch(`http://localhost:8000/posts/`, requestOpt);
        console.log(updatedPost);
        const data = await updatedPost.json();
        console.log(data);
        f();
    }
    const updatePost = async (pid) => {
        const updatedPost = await fetch(`http://localhost:8000/posts/${pid}`, { method: 'PUT' });
        const data = await updatedPost.json();
        console.log(data);
    }
    return (
        <>
            <div className="container">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Enter Id</td>
                                <td><input type="text" name="id" value={post.id} onChange={(e) => handleChange(e)}></input></td>
                            </tr>
                            <tr>
                                <td>Enter title</td>
                                <td><input type="text" name="title" value={post.title} onChange={(e) => handleChange(e)}></input></td>
                            </tr>
                            <tr>
                                <td>Enter views</td>
                                <td><input type="text" name="views" value={post.views} onChange={(e) => handleChange(e)}></input></td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => AddPost()}>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {
                    posts.map((p, i) => {
                        return <table key={p.id}>
                            <tbody>
                                <tr >
                                    <td>
                                        {p.id}
                                    </td>
                                    <td>
                                        {p.title}
                                    </td>
                                    <td>
                                        {p.views}
                                    </td>
                                    <td><button onClick={() => deletePost(p.id)}>delete</button></td>
                                    <td><button onClick={() => updatePost(p.id)}>update</button></td>
                                </tr>
                            </tbody>
                        </table>
                    })
                }
            </div>
        </>
    )
}
export default DisplayPost;
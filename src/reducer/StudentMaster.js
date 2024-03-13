import React, { useEffect, useReducer, useState } from 'react'
import { Button, Container, TabContainer, Table } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// const initStudents = [
//     { id: 1, name: "nikhil", age: 21, isMarried: false },
//     { id: 2, name: "nitin", age: 20, isMarried: false },
//     { id: 3, name: "neha", age: 19, isMarried: true },
//     { id: 4, name: "jatin", age: 22, isMarried: false },
//     { id: 5, name: "vishal", age: 23, isMarried: true },
//     { id: 6, name: "shruti", age: 20, isMarried: true }
// ]


// const StudentMaster = () => {
//     // const [input, setInput] = useState([{ id: "", name: "", age: "", isMarried: false }]);

//     const reducer = (state, action) => {
//         switch (action.type) {
//             case "INCR_AGE":
//                 return state.map((student) => {
//                     if (student.id == action.sid)
//                         return { ...student, age: student.age + 1 }
//                     else
//                         return student;
//                 })
//             case "NAME_CAPS":
//                 return state.map((student) => {
//                     if (student.id == action.sid)
//                         return { ...student, name: student.name.toUpperCase() }
//                     else
//                         return student;
//                 })
//             case "TOGGLE":
//                 return state.map((student) => {
//                     if (student.id == action.sid)
//                         return { ...student, isMarried: !student.isMarried }
//                     else
//                         return student;
//                 })

//             case "DELETE":
//                 return state.filter((student) => {
//                     return student.id != action.sid
//                 })
//             case "ADD":
//                 return state.map((student) => {
//                     return [{ ...student, id: action.sid }]
//                 })

//         }
//     }
//     // const [students, dispatch] = useReducer(reducer, initStudents)
//     // const [inputs, dispatchinput] = useReducer(inputreducer, input)
//     // const inputreducer = (state, action) => {
//     //     switch (action.type) {
//     //         case "ADD":
//     //             return state.map((student) => {
//     //                 console.log(student);
//     //                 return [...input, { ...student, id: action.id }]
//     //             })
//     //     }
//     // }
//     const [students, dispatch] = useReducer(reducer, initStudents)
//     // const [inputs, dispatchinput] = useReducer(inputreducer, input)
//     const incrAge = (id) => {
//         dispatch({ type: "INCR_AGE", sid: id })
//     }
//     const nameInCaps = (id) => {
//         dispatch({ type: "NAME_CAPS", sid: id })
//     }
//     const toggleMartialStatus = (id) => {
//         dispatch({ type: "TOGGLE", sid: id })
//     }
//     const AddStudent = () => {
//         dispatch({ type: "ADD", sid: Math.random() * 10000 })
//     }
//     const deleteStudent = (id) => {
//         dispatch({ type: "DELETE", sid: id })
//     }
//     const handleChange = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }
//     // const submitHandler = (e) => {
//     //     e.preventDefault();
//     //     AddStudent();
//     //     console.log(input)
//     // }
//     return (
//         <div>
//             <Container>
//                 <table>
//                     {students.map((student) => {
//                         const st = student.isMarried ? { backgroundColor: 'red' } : { backgroundColor: 'white' }
//                         return <tr style={st}>
//                             <td>{student.id}</td>
//                             <td>{student.name}</td>
//                             <td>{student.age}</td>
//                             <td><input type="checkbox" checked={student.isMarried ? true : false} /></td>
//                             <td><button onClick={() => incrAge(student.id)}>Incr Age</button></td>
//                             <td><button onClick={() => nameInCaps(student.id)}>Name Caps</button></td>
//                             <td><button onClick={() => toggleMartialStatus(student.id)}>Toggle status</button></td>
//                             {/* <td><input type='text' onChange={() => handleChange(e)} /><button onClick={() => AddStudent()}>Add</button></td> */}
//                             <td><button onClick={() => deleteStudent(student.id)}>Delete</button></td>
//                             <td><div>
//                                 <input type="text" name="name" value={name} onChange={(e) => handleChange} />
//                                 <input type='number' name='age' value={age} onChange={(e) => handleChange} />
//                                 <input type='checkbox' name='isMarried' value={isMarried} onChange={(e) => handleChange} />
//                             </div></td>
//                         </tr>
//                     })}
//                 </table>
//             </Container>
//             {/* <div>
//                 <form onSubmit={submitHandler}>
//                     <div>
//                         <input type="text" name="name" value={input.name} onChange={(e) => handleChange} />
//                         <input type='number' name='age' value={input.age} onChange={(e) => handleChange} />
//                         <input type='checkbox' name='isMarried' value={input.isMarried} onChange={(e) => handleChange} />
//                     </div>
//                     <button onClick={() => AddStudent}>Add</button>
//                 </form>
//             </div> */}

//         </div>
//     )
// }


const StudentMaster = () => {
    const [initStudents, setInitStudents] = useState({
        studentName: "",
        studentAge: "",
        isMarried: false
    })
    const handleChange = (e) => {
        setInitStudents({ ...initStudents, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        console.log("coming")
        e.preventDefault();
        console.log(initStudents.studentName, initStudents.studentAge, initStudents)
    }
    useEffect(() => {
        localStorage.setItem("initStudents", JSON.stringify(initStudents))
    }, [])
    return (
        <>
            <TabContainer>
                <Container>
                    <div>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Age
                                    </th>
                                    <th>
                                        Marriage
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='text' name="studentName" placeholder='enter name' value={initStudents.studentName} onChange={handleChange} />
                                    </td>
                                    <td>
                                        <input type='number' name='studentAge' placeholder='enter age' value={initStudents.studentAge} onChange={handleChange} />
                                    </td>
                                    <td>
                                        <input type='checkbox' name='isMarried' placeholder='enter name' value={initStudents.isMarried} checked={initStudents.isMarried ? false : true} onChange={handleChange} />
                                    </td>
                                    <td>

                                        <div><Button onClick={submitHandler}>
                                            submit
                                        </Button></div>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                    </div>
                </Container>
            </TabContainer></>
    )
}
export default StudentMaster
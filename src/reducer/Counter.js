import React, { useContext, useReducer } from "react";
import { useState } from "react";
import { userContext } from "./context/UserComponent";
function Counter() {
    const context = useContext(userContext)
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCR":
                return { count: state.count + 1 }

        }
    }
    const [counter, dispatch] = useReducer(reducer, { count: 0 });
    const f1 = () => {
        dispatch({ type: "INCR" })
    }
    return <>
        <>
            <div>
                <p>name is {context.name}</p>
                <p>{counter.count}</p>
                <button onClick={() => f1()}>Increase</button>
                {/* <p onClick={() => f1()}>counter {count}</p> */}
            </div>
        </>
    </>
}
export default Counter;
import React, { useState } from "react";

const ToDo = (props) => {
    const [inputText, setInputText] = useState("");

    const processSubmit = (e) => {
        e.preventDefault();
        if(inputText.length === 0) {
            return;
        } else {
            props.newToDo({status: false, text: inputText});
            setInputText("");
        }
    }

    return(
        <form onSubmit = {processSubmit}>
            <input type = "text" onChange = {e => setInputText(e.target.value)} value = {inputText}/>
            <button>Add ToDo</button>
        </form>
    )
}

export default ToDo;
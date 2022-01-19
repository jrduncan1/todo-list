import React from "react";

const DisplayToDo = (props) => {
    const checkToDo = toDo => {
        const copyToDo = props.newToDo.map(task => {
            if(task === toDo) {
                task.status = !task.status;
            }
            return task;
        })
        props.setToDoList(copyToDo);
    }

    const deleteToDo = toDo => {
        const filterToDoList = props.newToDo.filter(task => {
            if(task === toDo && toDo.status === true) {
                return task !== toDo;
            }
            return task;
        })
        props.setToDoList(filterToDoList);
    }

    return(
        <div>
            {props.newToDo.map((toDo, i) => {
                return(
                    <li key={i} style={{textDecoration: toDo.status ? "line-through" : ""}}>
                        {toDo.text}
                        <input checked={toDo.status} onChange={() => checkToDo(toDo)} type="checkbox" />
                        <button onClick={() => deleteToDo(toDo)}>Delete</button>
                    </li>
                )
            })}
        </div>
    )
}

export default DisplayToDo;
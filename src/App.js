import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import ToDo from "./components/ToDo";
import DisplayToDo from './components/DisplayToDo';

function App() {
  const [toDoList, setToDoList] = useState([{status: true, text: 'Finish assignment'}, {status: false, text: 'Quit staying up late'}]);

  const createToDo = newToDo => {
    setToDoList([...toDoList, newToDo]);
  }

  return(
    <div>
      <ToDo newToDo = {createToDo} />
      <DisplayToDo newToDo = {toDoList} setToDoList={setToDoList} />
    </div>
  );


}

export default App;

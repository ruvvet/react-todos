import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';
import React, { useState } from 'react';

function App() {
  const [toDoList, setList] = useState([
    { priority: 1, thing: 'Shower' },
    { priority: 2, thing: 'brush teeth' },
    { priority: 5, thing: 'hello' },
  ]);

  const [prio, newprio] = useState();
  const [todo, newtodo] = useState();

  const clearList = () => {
    const deletefirst = toDoList.splice(1, toDoList.length - 1);
    setList(deletefirst);
  };

  const addToDo = () => {
    const newToDo = [...toDoList, { priority: prio, thing: todo }];
    setList(newToDo);
  };

  const printToDo = toDoList.map((todo, index) => {
    return (
      <li>
        <ListItem priority={todo.priority} thing={todo.thing} key={index} />
      </li>
    );
  });

  return (
    <div class="newClass">
      <header>My List</header>
      <div>
        <ul>{printToDo}</ul>
        <p> Clear the List</p>
        <button onClick={clearList}>CLEAR ALL</button>
        <p> Add an Item</p>

        <p>
          <input
          name="prio"
            onChange={(evt) => newprio(evt.target.value)}
            type="number"
            placeholder="priority"
          ></input>
        </p>
        <p>
          <input
          name="todo"
            onChange={(evt) => newtodo(evt.target.value)}
            type="text"
            placeholder="thing to do"
          ></input>
        </p>
        <button onClick={addToDo}>ADD</button>

        {/* <button onClick = {addTodo}>ADD</button> */}
      </div>
    </div>
  );
}

export default App;

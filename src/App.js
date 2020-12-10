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

  const newAuthor = useState();

  // use state always returns an array
  // always returns the exact same values first + 2nd array values

  const [prio, setPrio] = useState();
  const [todo, setNewToDo] = useState();

  //  the first var is the name of the state, - this is a variable
  // the second var is always set(name of the state) - the second variable is afunctio
  // the function takes one parameter that updates the value

  //when the function is called + state is udpated, the component is re-rendered
  // this is the COMPONENT LIFECYCLE
  // its not async, its linear

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
            value={prio}
            onChange={(evt) => setPrio(evt.target.value)}
            type="number"
            placeholder="priority"
          ></input>
        </p>
        <p>
          <input
            name="todo"
            value={todo}
            onChange={(evt) => setNewToDo(evt.target.value)}
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

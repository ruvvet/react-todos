import './App.css';
import List from './components/List';
import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([
    { todo: 'Shower', prio: 5, note: 'do this first' },
    { todo: 'brush teeth', prio: 2, note: 'cavities on cavities' },
    { todo: 'hello', prio: 3, note: 'something' },
  ]);

  // use state always returns an array
  // always returns the exact same values first + 2nd array values

  const [prio, setPrio] = useState();
  const [todo, setNewToDo] = useState();
  const [note, setNote] = useState();
  const [strikeThrough, setStrikeThrough] = useState({});

  //  the first var is the name of the state, - this is a variable
  // the second var is always set(name of the state) - the second variable is afunctio
  // the function takes one parameter that updates the value

  //when the function is called + state is udpated, the component is re-rendered
  // this is the COMPONENT LIFECYCLE
  // its not async, its linear

  //asldigjasdgj
  const clearList = () => {
    setList([]);
  };

  const sortList = () => {
    const listCopy = [...list];
    listCopy.sort((a, b) => (a.prio > b.prio ? 1 : -1));
    setList(listCopy.sort((a, b) => (a.prio > b.prio ? 1 : -1)));
  };

  const addToDo = () => {
    setList([...list, { todo: todo, prio: prio, note: note }]);
  };

  const handleCheck = (index) => {
    const strikeThroughCopy = { ...strikeThrough };
    strikeThroughCopy[index] = 'strikethrough';
    setStrikeThrough(strikeThroughCopy);
  };

  const handlePrioChange = (index, newPrio) => {
    const listCopy = [...list];
    listCopy[index].prio = parseInt(newPrio);
    setList(listCopy);
  };

  const handleDelete = (index) => {
    const listA = list.slice(0, index);
    const listB = list.slice(index + 1, list.length + 1);
    setList(listA.concat(listB));
  };

  return (
    <div className="App">
      <header>TODO</header>
      <div>
        <List
          list={list}
          strikeThrough={strikeThrough}
          handleCheck={handleCheck}
          handlePrioChange={handlePrioChange}
          handleDelete={handleDelete}
        />

        <div>
          <button onClick={sortList}>SORT</button>
          <button onClick={clearList}>CLEAR ALL</button>

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
          <p>
            <input
              name="note"
              value={note}
              onChange={(evt) => setNote(evt.target.value)}
              type="text"
              placeholder="note"
            ></input>
          </p>
          <button onClick={addToDo}>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default App;

// Having a checkbox in front of every TODO. When checking this box, it should strike through the text. If you uncheck it should list it normally.
// Have a numeric input in front of the TODO item, which you can change, and then re-sorts the list based on priority
// Have a delete or X button at the end of every TODO item that deletes that specific item

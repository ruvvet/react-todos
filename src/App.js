import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'
import React, {useState} from 'react';



function App() {
  const [toDoList, setList] = useState(

    [
    {priority: 1, thing: "Shower"}, {priority: 2, thing:"brush teeth"}, {priority: 5, thing:"hello"}
  ]


  );

  const clearList =() =>{
    const deletefirst = toDoList.splice(1,(toDoList.length-1))
    setList(deletefirst)
  }

  const printToDo = toDoList.map((todo, index) =>{
    return <li><ListItem priority={todo.priority} thing={todo.thing} key={index}/></li>
  })

  return (
    <div class="newClass">
    <header>My List</header>
    <div>
      <ul>
     {printToDo}
      </ul>

      <button onClick={clearList}>CLEAR ALL</button>
    </div>
  </div>
  );
}

export default App;

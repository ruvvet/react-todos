import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'


const toDoList = [{priority: 1, thing: "Shower"}, {priority: 2, thing:"brush teeth"}, {priority: 5, thing:"hello"}]

const printToDo = toDoList.map(todo =>{
  return <li><ListItem priority={todo.priority} thing={todo.thing} /></li>
})



function App() {
  return (
    <div class="newClass">
    <header>My List</header>
    <div>
      <ul>
     {printToDo}
      </ul>
    </div>
  </div>
  );
}

export default App;

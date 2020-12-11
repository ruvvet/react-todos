import './list.css';

export default function List({
  list,
  handleCheck,
  handlePrioChange,
  handleDelete,
  strikeThrough,
}) {
  //strike through is lagging
  // not updating in prio value even though its updating the object

  const todos = list.map((item, index) => {
    return (
      <li key={`todo${index}`}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => handleCheck(index)}
        />
        <input
          className="prio"
          type="number"
          value={item.prio}
          placeholder={item.prio}
          onChange={(evt) => handlePrioChange(index, evt.target.value)}
        ></input>
        <span className={`todoitem ${strikeThrough[index]}`}>{item.todo}</span>{' '}
        - {item.note}
        <button className="delete" onClick={() => handleDelete(index)}>
          X
        </button>
      </li>
    );
  });

  return <ul className="todolist">{todos}</ul>;
}

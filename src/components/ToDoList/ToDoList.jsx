import ToDoListItem from "../ToDoListitem/ToDoListItem"
import './ToDoList.css'

export default function ToDoList ({todos, onDeleted}) {
  
  const elements = todos.map(e => {
    const {id, ...itemProps} = e

    return (<li key={id} className="list-group-item">
			<ToDoListItem {...itemProps} 
      onDeleted={() => onDeleted(id)}/>
		</li>)
  })

  return (
		<ul className='list-group todo-list'>
			{elements}
		</ul>
	)
}
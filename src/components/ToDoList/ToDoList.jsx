import ToDoListItem from "../ToDoListitem/ToDoListItem"
import './ToDoList.css'

export default function ToDoList ({todos}) {
  
  const elements = todos.map(e => {
    const {id, ...itemProps} = e

    return (<li key={id} className="list-group-item">
			<ToDoListItem {...itemProps} />
		</li>)
  })

  return (
		<ul className='list-group todo-list'>
			{elements}
		</ul>
	)
}
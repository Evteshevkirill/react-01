import ToDoList from '../ToDoList/ToDoList';
import Title from '../Title/Title';
import Input from '../Input/Input';
import SearchFilter from '../SearchFilter/SearchFilter';

import './App.css'


export default function App () {
const toDoData = [
	{ label: 'Drink Coffee', important: false, id: '1' },
	{ label: 'Build React App', important: true, id: '2' },
	{ label: 'Have a lunch', important: false, id: '3' },
]

  return (
		<div className='todo-app'>
			<Title toDo={1} done={3} />
			<div className='top-panel d-flex'>
				<Input />
				<SearchFilter />
			</div>

			<ToDoList todos={toDoData} />
		</div>
	)
}

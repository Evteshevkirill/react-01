import {Component} from 'react'
import ToDoList from '../ToDoList/ToDoList';
import Title from '../Title/Title';
import Input from '../Input/Input';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import AddItemBtn from '../AddItemBtn/AddItemBtn'

import './App.css'

export default class App extends Component {

  maxId = 100

  state = {
        toDoData: [
      { label: 'Drink Coffee', important: false, id: '1' },
      { label: 'Build React App', important: true, id: '2' },
      { label: 'Have a lunch', important: false, id: '3' },
    ]
  }

    deleteItem = (id) => {
      this.setState(({toDoData})=> {
       const idx = toDoData.findIndex((el) => el.id === id)
       const newToDoData = toDoData.toSpliced(idx, 1)
       return {
					toDoData: newToDoData,
				}
      })
    } 

    addItem = (text) => {
      const newItem = {
				label: text,
				important: false,
				id: this.maxId++,
			}
      this.setState(({toDoData}) => {
        const newTodoData = [...toDoData, newItem]
				return {
					toDoData: newTodoData,
				}
      })
    }

  render() {
    return (
			<div className='todo-app'>
				<Title toDo={1} done={3} />
				<div className='top-panel d-flex'>
					<Input />
					<ItemStatusFilter />
				</div>

				<ToDoList todos={this.state.toDoData} onDeleted={this.deleteItem} />
				<AddItemBtn onItemAdded={this.addItem} />
			</div>
		)
  }
}

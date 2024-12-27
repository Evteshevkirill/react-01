import { Component } from "react";

export default class AddItemBtn extends Component {


  render() {
    return (
			<button
				className='btn btn-outline-secondary'
				onClick={() => this.props.onItemAdded('Hello World')}>
				Add Item
			</button>
		)
  }
}
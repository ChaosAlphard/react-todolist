import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  constructor() {
    super()
  }

  // 子组件可以通过 `调用父组件传递过来的方法` 的方式
  // 来和父组件进行通讯
  deleteTodo(index) {
    this.props.removeTodo(index)
    console.log(this.props.index, this.props.i)
  }

  render() {
    return (
      <li className="todo-item">
        <span className="todo-text">{this.props.item}</span>
        <button className="remove-todo" type="button"
        onClick={this.deleteTodo.bind(this, this.props.index)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem

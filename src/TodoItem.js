import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  constructor() {
    super()

    this.deleteTodo = this.deleteTodo.bind(this)
  }

  // 子组件可以通过 `调用父组件传递过来的方法` 的方式
  // 来和父组件进行通讯
  deleteTodo(index) {
    this.props.removeTodo(index)
  }

  render() {
    // 使用ES6 解构
    const { item, index } = this.props

    return (
      <li className="todo-item">
        <span className="todo-text">{item}</span>
        <button className="remove-todo" type="button"
        onClick={this.deleteTodo.bind(this, index)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      inputVal: ''
    }
  }

  inputChange(e) {
    this.setState({
      inputVal: window.event.target.value
    })
    // e.target === window.event.target
    console.log(e.target, window.event.target)
  }

  addTodo() {
    if(this.state.inputVal.trim().length < 1) {
      return false
    }
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }

  removeTodo(index) {
    // 拷贝一份list 用于操作
    // 尽量不直接修改state 的值
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div className="App">
        {/* todo */}
        <div className="add-todo">
          <input type="text" className="add-input"
          value={this.state.inputVal}
          // this会指向调用它的对象(button)
          // 需要使用bind 来改变this指向
          onChange={this.inputChange.bind(this)}/>

          <button className="add-btn" type="button"
          onClick={this.addTodo.bind(this)}>
            添加
          </button>
        </div>
        {/* body */}
        <ul className="todo-list">{
          this.state.list.map((item, i) => {
            return (
              <li className="todo-item" key={i+item}>
                <span className="todo-text">{item}</span>
                <button className="remove-todo" type="button"
                onClick={this.removeTodo.bind(this, i)}>
                  Delete
                </button>
              </li>
            )
          })
        }</ul>
      </div>
    )
  }
}

export default App;

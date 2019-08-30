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

  render() {
    return (
      <div className="todo-list">
        {/* todo */}
        <div className="add-todo">
          <input type="text" value={this.state.inputVal}
            // this会指向调用它的对象(button)
            // 需要使用bind 来改变this指向
          onChange={this.inputChange.bind(this)}/>

          <button type="button"
          onClick={this.addTodo.bind(this)}>
            添加
          </button>
        </div>
        {/* body */}
        <ul className="todo-list">{
          this.state.list.map((item, i) => {
            return (
              <li className="todo-item"
                key={i+item}>
                {item}
              </li>
            )
          })
        }</ul>
      </div>
    )
  }
}

export default App;

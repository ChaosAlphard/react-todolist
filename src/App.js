import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      inputVal: ''
    }

    this.inputChange = this.inputChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  inputChange(e) {
    this.setState({
      inputVal: window.event.target.value
    })
    // e.target === window.event.target
    // console.log(e.target === window.event.target)
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

  renderTodoItem() {
    return (
      this.state.list.map((item, i) => {
        // return (
        //   <li className="todo-item" key={i+item}>
        //     <span className="todo-text">{item}</span>
        //     <button className="remove-todo" type="button"
        //     onClick={this.removeTodo.bind(this, i)}>
        //       Delete
        //     </button>
        //   </li>
        // )
        // 父组件 向 子组件 传值
        // 父组件通过属性的方式向子组件传递参数
        // 子组件通过props 接收父组件传递过来的参数
        return <TodoItem key={i}
                removeTodo={this.removeTodo.bind(this)}
                item={item} index={i}/>
      })
    )
  }

  render() {
    return (
      // React 限制只能返回一个根元素,
      // 其他元素都必须放在根元素中
      // 当需要返回两个以上的元素时
      // 可以使用Fragment 标签来代替外层元素
      // Fragment标签 自身不会生成Dom元素
      <React.Fragment>
        {/* todo */}
        <div className="add-todo">
          <input type="text" className="add-input"
          value={this.state.inputVal}
          // this会指向调用它的对象(button)
          // 需要使用bind 来改变this指向
          // onChange={this.inputChange.bind(this)}/>
          // 也可以在constructor 中绑定this 指向
          onChange={this.inputChange} />

          <button className="add-btn" type="button"
          onClick={this.addTodo}>
            添加
          </button>
        </div>
        {/* body */}
        <ul className="todo-list">
          {this.renderTodoItem()}
        </ul>
      </React.Fragment>
    )
  }
}

export default App;

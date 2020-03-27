import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem' // 子组件
import './TodoList.scss';

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    // 绑定 this对象
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClickAdd = () => {
    if (this.state.inputValue === '') {
      console.log('输入错误')
      return 0
    }
    this.setState({
      list: [...this.state.list,{
        content:this.state.inputValue,
        isEnd:false
      }],
      inputValue:''
    })
    console.log(this.state.list)
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数
  handleDelete = (index) => { // 删除
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  handleIsEnd = (index) => { // isEnd
    let list = [...this.state.list]
    list = list.map((item,itemIndex) => {
      if (itemIndex === index) {
        item.isEnd = !item.isEnd
        console.log(item)
      }
      return item
    })
    this.setState({
      list
    })
  }

  getTodoItem() { // 获取子组件
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          deleteItem={this.handleDelete}
          handleIsEnd={this.handleIsEnd}
          key={index}
          content={item.content}
          isEnd={item.isEnd}
          index={index}
        />
      )
    })
  }

  render() {
      let EndNum = this.state.list.filter(item => item.isEnd === true)
      return (
        <Fragment>
          <div className='container ContentBox'>
            <section className="hero is-primary">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    TodoList
                  </h1>
                </div>
              </div>
            </section>
            <div className="notification action">
              <input
                type="text"
                className="input is-primary"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
              />
              <button className="button is-primary" onClick={this.handleClickAdd}>add</button>
            </div>
            <ul className="notification list">{this.getTodoItem()}</ul>
            <footer className="footer">
              <p>共有:{this.state.list.length} 件事情</p>
              <p>已完成：{EndNum.length}</p>
              <p>未完成：{this.state.list.length - EndNum.length}</p>
            </footer>
          </div>
        </Fragment>
      )
  }
}
export default TodoList
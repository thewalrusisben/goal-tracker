import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import { List as UiList, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{
        id: 1,
        goalName: '(Near) Daily Exercise',
        completeToday: false,
        scheduledToday: true
      }],
      viewIncomplete: true
    }
    this.completeGoal = this.completeGoal.bind(this)
    this.headerSetVisibility = this.headerSetVisibility.bind(this)
    this.launchAddTodoDialogue = this.launchAddTodoDialogue.bind(this)
  }

  headerSetVisibility () {
    this.setState({viewIncomplete: !this.state.viewIncomplete})
  }

  completeGoal (todo) {
    const todoId = todo.target.value
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id.toString() === todoId) {
        todo.completeToday = !todo.completeToday
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  launchAddTodoDialogue () {

  }
  
  render () {
    return (
      <div>
        <Header toggleVisbility={() => this.headerSetVisibility()} />
        <UiList>
          {this.state.todos.filter((todo) => {
            return todo.completeToday !== this.state.viewIncomplete
          })
          .map((todo) => {
            return (
              <ListItem key={todo.id} leftCheckbox={<Checkbox onClick={this.completeGoal} value={todo.id} />}>
                {todo.goalName}
              </ListItem>
            )
          })}
        </UiList>
        <Link to='/add'>
          <FloatingActionButton secondary={true} style={{position: 'absolute', right: '20px', bottom: '20px'}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}

export default List

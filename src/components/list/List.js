import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List as UiList, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class List extends Component {
  constructor(props) {
    super(props)
    this.updateGoal = this.updateGoal.bind(this)
  }
  updateGoal (todo) {
    const todoId = todo.target.value
    const updatedTodos = this.props.todos.map((todo) => {
      if (todo.id.toString() === todoId) {
        todo.completeToday = !todo.completeToday
      }
      return todo
    })
    this.props.updateParentTodos(updatedTodos)
  }
  
  render () {
    return (
      <div>
        <UiList>
          {this.props.todos.filter((todo) => {
            return todo.completeToday !== this.props.visibility  
          })
          .map((todo) => {
            return (
              <ListItem key={todo.id} leftCheckbox={<Checkbox onClick={this.updateGoal} value={todo.id} checked={todo.completeToday} />}>
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

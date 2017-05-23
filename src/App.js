import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import Header from './components/header/Header'
import List from './components/list/List'
import AddTodo from './components/addTodo/AddTodo'
import PropTypes from 'prop-types'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewIncomplete: true,
      todos: []
    }
    this.headerSetVisibility = this.headerSetVisibility.bind(this)
  }

  headerSetVisibility (targetView) {
    if (targetView === 'complete') {
      this.setState({viewIncomplete: false}) 
    } else {
      this.setState({viewIncomplete: true})
    }
  }
  
  updateTodos (todoList) {
    this.setState({todos: todoList})
  }

  addTodo (todo) {
    let newTodos = this.state.todos
    newTodos.push(todo)
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div>
        <Header toggleVisbility={(targetView) => this.headerSetVisibility(targetView)} />
        <Switch>
          <Route
            exact
            path='/add'
            component={() => <AddTodo addParentTodo={(todo) => this.addTodo(todo)} />}
          />
          <Route
            exact
            path='/'
            component={() => <List
              visibility={this.state.viewIncomplete}
              todos={this.state.todos}
              updateParentTodos={(todo) => this.updateTodos(todo)}
            />}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  viewIncomplete: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    goalName: PropTypes.string,
    completeToday: PropTypes.bool
  }))
}


export default App;

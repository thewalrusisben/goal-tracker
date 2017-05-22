import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import Header from './components/header/Header'
import List from './components/list/List'
import AddTodo from './components/addTodo/AddTodo'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewIncomplete: true,
      todos: [{
        id: 1,
        goalName: '(Near) Daily Exercise',
        completeToday: false,
        scheduledToday: true
      }]
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
  render() {
    return (
      <div>
        <Header toggleVisbility={(targetView) => this.headerSetVisibility(targetView)} />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <List
                visibility={this.state.viewIncomplete}
                todos={this.state.todos}
                updateParentTodos={(todos) => this.updateTodos(todos)} 
              />}
          />
          <Route
            exact
            path='/add'
            component={AddTodo}
          />
          <Route component={List} />
        </Switch>
      </div>
    );
  }
}

export default App;

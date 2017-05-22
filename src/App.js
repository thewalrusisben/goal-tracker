import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import List from './components/list/List'
import AddTodo from './components/addTodo/AddTodo'

/* Imports related to Material UI Theme + Functionality */
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route
            exact
            path='/'
            component={List}
          />
          <Route
            exact
            path='/add'
            component={AddTodo}
          />
          <Route component={List} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react'
import {Card, CardActions, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import '../../App.css';

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: +new Date(),
      goalName: '',
      completeToday: false
    }
    this.buildTodo = this.buildTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.clearGoal = this.clearGoal.bind(this)
  }

  buildTodo (e) {
    e.preventDefault();
    this.setState({goalName: e.target.value})
  }

  addTodo () {
    let todo = this.state
    console.log(todo)
    this.props.addParentTodo(todo)
  }

  clearGoal () {
    this.setState({goalName: ''})
  }

  render() {
    return (
      <Card className={'AddTodoCard'}>
        <CardTitle title="Add New Goal" subtitle="All goals are good, but the best are accomplished regularly." />
        <form onSubmit={this.addTodo} className={'LeftAlignInput'}>
          <TextField style={{left: '25px'}}
            type="text"
            name="goalName"
            onChange={this.buildTodo}
            value={this.state.goalName}
            hintText="Try to take over the world!"
          />
          <CardActions>
            <FlatButton label="Cancel" secondary={true} disabled={this.state.goalName.length === 0} onTouchTap={this.clearGoal} />
            <FlatButton label="Add Goal" primary={true} disabled={this.state.goalName.length === 0} onTouchTap={this.addTodo} style={{position: 'absolute', right: '10px'}} />
        </CardActions>
        </form>
      </Card>
    )
  }
}

AddTodo.propTypes = {
  id: PropTypes.number,
  goalName: PropTypes.string,
  completeToday: PropTypes.bool
}

export default AddTodo

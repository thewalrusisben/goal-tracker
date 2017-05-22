import React, { Component } from 'react'
import {Card, CardActions, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

let style = {
  position: 'relative',
  width: '50%',
  marginTop: '25px',
  marginLeft: 'auto',
  marginRight: 'auto'
}

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo (e) {
    e.preventDefault();
    console.log(e.target.value)
  }
  render() {
    return (
      <Card style={style}>
        <CardTitle title="Add New Goal" subtitle="All goals are good, but the best are accomplished regularly." />
        <form onSubmit={this.addTodo}>
          <TextField style={{left: '25px'}}
            type="text"
            name="goalName"
            hintText="Try to take over the world!"
          />
          <CardActions>
            <FlatButton label="Cancel" secondary={true} />
            <FlatButton label="Add Goal" primary={true} type="submit" />
        </CardActions>
        </form>
      </Card>
    )
  }
}

export default AddTodo

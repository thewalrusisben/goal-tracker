import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      view: 'Complete'
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }
  toggleDrawer () {
    this.setState({open: !this.state.open})
  }

  toggleView (status) {
    const visibility = status.target.value
    if (visibility === 'complete') {
      this.setState({view: 'Incomplete'})
    } else {
      this.setState({view: 'Complete'})
    }
    this.props.toggleVisbility()
    this.setState({open: false})
  }
  render () {
    return (
      <div>
      <AppBar
        title="Goal Tracker"
        iconElementLeft={<IconButton><NavigationMenu onTouchTap={this.toggleDrawer} /></IconButton>}
      />
      <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
        <MenuItem onTouchTap={this.toggleView} value="incomplete">Incomplete Today</MenuItem>
        <MenuItem onTouchTap={this.toggleView} value="complete">Complete Today</MenuItem>
      </Drawer>
      </div>
    )
  }
}

export default Header

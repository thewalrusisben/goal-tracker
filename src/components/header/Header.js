import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }
  
  toggleDrawer () {
    this.setState({open: !this.state.open})
  }

  toggleView (targetView) {
    if (targetView === 'complete') {
      this.props.toggleVisbility('complete')
    } else {
      this.props.toggleVisbility('incomplete')
    }
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
        <Link to='/' style={{textDecoration: 'none'}}><MenuItem onTouchTap={() => this.toggleView('incomplete')} >Incomplete Today</MenuItem></Link>
        <Link to='/' style={{textDecoration: 'none'}}><MenuItem onTouchTap={() => this.toggleView('complete')} >Complete Today</MenuItem></Link>
      </Drawer>
      </div>
    )
  }
}

export default Header

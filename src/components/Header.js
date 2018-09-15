import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <AppBar>
    <Toolbar>
      <Typography
        noWrap
        variant="title"
      >
        Blog App
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <NavLink to="/dashboard" exact={true}>Dashboard</NavLink>
        </Grid>
        {/* <Grid item xs={3}>
          
        </Grid> */}
      </Grid>
      <Button 
        type="button" 
        onClick={startLogout}
        color="inherit"
      >
        Logout
      </Button>
    </Toolbar>
  </AppBar>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
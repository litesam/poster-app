import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    <h1>Blog App</h1>
    <NavLink to="/dashboard" exact={true}>Dashboard</NavLink>
    <NavLink to="/create">Add your 2 cents</NavLink>
    <Link to="/">Logout</Link>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(mapDispatchToProps)(Header)
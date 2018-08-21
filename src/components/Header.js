import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header>
    <h1>Blog App</h1>
    <NavLink to="/" exact={true}>Dashboard</NavLink>
    <NavLink to="/create">Add your 2 cents</NavLink>
  </header>
)
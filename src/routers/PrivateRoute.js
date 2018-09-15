import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Header from '../components/Header'

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      isAuthenticated ? (
        <div>
          <List>
            <ListItem>
              <Header />
            </ListItem>
            <ListItem>
              <Component {...props} />
            </ListItem>
          </List>
        </div>
      ) : (
        <Redirect to="/" />
      ) 
    )}
  />
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.id
})

export default connect(mapStateToProps)(PrivateRoute)
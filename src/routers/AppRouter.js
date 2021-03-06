import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import BlogDashboardPage from '../components/BlogDashboardPage'
import AddBlogPage from '../components/AddBlogPage'
import EditPostPage from '../components/EditPostPage'
import LoginPage from '../components/LoginPage'
import PostReadPage from '../components/PostReadPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={BlogDashboardPage} />
        <PrivateRoute path="/create" component={AddBlogPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <Route path="/read/:id" component={PostReadPage} />
      </Switch>
    </div>
  </Router>
)

export { AppRouter as default }
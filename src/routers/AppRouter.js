import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router, Switch } from 'react-router-dom'
import BlogDashboardPage from '../components/BlogDashboardPage'
import AddBlogPage from '../components/AddBlogPage'
import Header from '../components/Header'
import EditPostPage from '../components/EditPostPage'
import LoginPage from '../components/LoginPage'
import PostReadPage from '../components/PostReadPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={BlogDashboardPage} />
        <PrivateRoute path="/create" component={AddBlogPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <PublicRoute path="/read/:id" component={PostReadPage} />
      </Switch>
    </div>
  </Router>
)

export { AppRouter as default }
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import BlogDashboardPage from '../components/BlogDashboardPage'
import AddBlogPage from '../components/AddBlogPage'
import Header from '../components/Header'
import EditPostPage from '../components/EditPostPage'
import LoginPage from '../components/LoginPage'
import PostReadPage from '../components/PostReadPage'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={BlogDashboardPage} />
          <Route path="/create" component={AddBlogPage} />
          <Route path="/edit/:id" component={EditPostPage} />
          <Route path="/read/:id" component={PostReadPage} />
        </Switch>
    </div>
  </Router>
)

export { AppRouter as default }
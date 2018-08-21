import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogDashboardPage from '../components/BlogDashboardPage'
import AddBlogPage from '../components/AddBlogPage'
import Header from '../components/Header'
import EditPostPage from '../components/EditPostPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route path="/" component={BlogDashboardPage} exact={true} />
          <Route path="/create" component={AddBlogPage} />
          <Route path="/edit/:id" component={EditPostPage} />
        </Switch>
    </div>
  </BrowserRouter>
)

export { AppRouter as default }
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import NavLink from 'react-router-dom/NavLink'
import PostList from './PostList'
import PostFilters from './PostFilters'

export default () => (
  <div>
    <PostFilters />
    <PostList />
    <Button 
      component={NavLink} 
      to="/create"
      variant="fab"
      aria-label="add"
    >
      <AddIcon />
    </Button>
  </div>
)
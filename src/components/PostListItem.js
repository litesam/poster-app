import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = ({ note, id }) => (
  <div>
    <Link to={`/edit/${id}`}>{note}</Link>
  </div>
)

export { PostListItem as default }
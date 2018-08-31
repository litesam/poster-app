import React from 'react'
import { Link } from 'react-router-dom'

export default ({ note, id }) => (
  <div>
    <Link to={`/read/${id}`}>{note}</Link>
  </div>
)
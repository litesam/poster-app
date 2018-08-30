// Delete this file and remove from the Approuter 
// because this is an debug page
import React from 'react'
import { connect } from 'react-redux'

export const PostDebugDashboardPage = ({ posts }) => (
  <div>
    <p>{/* posts[0].note */}</p>
    <p>God please make this work</p>
  </div>
)

const mapStateToProps = (state) => {
  console.log(state.posts)
  return {
    posts: state.posts.post
  }
}

export default connect(mapStateToProps)(PostDebugDashboardPage)
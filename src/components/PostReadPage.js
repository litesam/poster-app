import React from 'react'
import Remarkable from 'react-remarkable'
import { connect } from 'react-redux'
import getVisiblePosts from '../selectors/getVisiblePosts'

export const PostReadPage = ({ post }) => {
  return (
    <div>
      <h1>{post.note}</h1>
      <Remarkable source={post.description} />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    post: getVisiblePosts(state.posts, state.filters).find((post) => post.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(PostReadPage)
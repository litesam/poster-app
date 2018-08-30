import React from 'react'
import Remarkable from 'react-remarkable'
import { connect } from 'react-redux'

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
    post: state.posts.find(post => post.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(PostReadPage)
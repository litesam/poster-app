import React from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { startEditPost, startDeletePost } from '../actions/blog'

class EditPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.startDeletePost(this.props.post.id)
    this.props.history.push('/')
  } 
  render() {
    const { post } = this.props
    return (
      <div>
        <PostForm {...post} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startDeletePost: (id) => dispatch(startDeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)
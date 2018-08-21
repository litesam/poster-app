import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { startAddPost } from '../actions/blog'

class AddBlogPage extends React.Component{
  onSubmit = (post) => {
    this.props.startAddPost(post)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <PostForm onSubmit={this.onSubmit}/>
      </div>
    )
  } 
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(AddBlogPage)
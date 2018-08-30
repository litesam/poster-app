import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import getVisiblePosts from '../selectors/getVisiblePosts'

export const PostList = ({ posts }) => (
  <div>
    {
      posts.length === 0 ? (
        <div>
          <span>No posts</span>
        </div>
      ) : (
        posts.map((post) => {
          return <PostListItem key={post.id} {...post} />
        })
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: getVisiblePosts(state.posts, state.filters)
  }
}

export default connect(mapStateToProps)(PostList)
import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import getVisiblePosts from '../selectors/getVisiblePosts'
import PostReadListItem from './PostReadListItem'

export const PostList = ({ posts, authId, postLength }) => {
  return (
    <div>
      {
        postLength === 0 ? (
          <div>
            <span>No posts</span>
          </div>
        ) : (
          posts.map((post) => {
            return post.uid !== authId ? (
              <PostReadListItem key={post.id} {...post} />
            ) : (
              <PostListItem key={post.id} {...post} />
            )
          })
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const poster = state.posts.map((post) => post.post)
  const posters = []

  poster.forEach((post) => {
    post.forEach((pos) => {
      posters.push(pos)
    })
  })
  return {
    authId: state.auth.id,
    postLength: state.posts.length,
    posts: getVisiblePosts(posters, state.filters)
  }
}

export default connect(mapStateToProps)(PostList)

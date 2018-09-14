import database from '../firebase/firebase'

// Things that are needed for the blog post
// 1) Adding post
// 2) Deleting post
// 3) Editing post
// 4) Getting post from the database

// Add Post to the database
export const addPost = (post) => ({
  type: 'ADD_POST',
  post
})

export const startAddPost = (postData) => {
  return (dispatch, getState) => {
    const {
      note = '',
      createdAt = 0,
      description = ''
    } = postData
    const post = { description, note, createdAt }
    const uid = getState().auth.id
    const uName = getState().auth.name
    return database.ref('posts').push({
      note,
      createdAt,
      description,
      uName,
      uid
    }).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        uName,
        uid,
        ...post
      }))
    })
  }
}

// Get posts from the database
const setPost = (posts) => ({
  type: 'SET_POST',
  posts
})

export const startSetPost = () => {
  return (dispatch) => {
    return database.ref('posts').once('value').then((childSnapshot) => {
      const posts = []
      childSnapshot.forEach((data) => {
        posts.push({
          id: data.key,
          ...data.val()
        })
      })
      dispatch(setPost(posts))
    })
  }
}

// Edit the post
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
})

export const startEditPost = (id, updates) => {
  return (dispatch) => {
    return database.ref(`posts/${id}`).update(updates).then(() => {
      dispatch(editPost(id, updates))
    })
  }
}

// Delete post
export const deletePost = (id) => ({
  type: 'DELETE_POST',
  id
})

export const startDeletePost = (id) => {
  return (dispatch) => {
    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(deletePost(id))
    })
  }
}
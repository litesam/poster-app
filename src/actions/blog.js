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
    return database.ref(`users/${uid}/posts`).push({
      note,
      createdAt,
      description,
      uName
    })
    .then((ref) => {
      dispatch(addPost({
        id: ref.key,
        uName,
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
    
    return database.ref(`users`).once('value')
    .then((snapshot) => {
      const posts = []
      
      snapshot.forEach((childSnapshot) => {
        const post = []
        let uid = childSnapshot.key

        childSnapshot.child('posts').forEach((childsChildSnapshot) => {
          post.push({
            id: childsChildSnapshot.key,
            uid,
            ...childsChildSnapshot.val()
          })
        })
        posts.push({
          uid: childSnapshot.key,
          post
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
    return database.ref(`posts/${id}`).update(updates)
    .then(() => {
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
    return database.ref(`posts/${id}`).remove()
    .then(() => {
      dispatch(deletePost(id))
    })
  }
}
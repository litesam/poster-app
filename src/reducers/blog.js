const blogReducersDefaultState = []

export default (state = blogReducersDefaultState, action) => {
  switch(action.type) {
    case 'ADD_POST':
      return [...state, action.post]
    case 'EDIT_POST':
      return state.map((post) => {
        if (action.id === post.id) {
          return {
            ...post,
            ...action.updates
          }
        } else {
          return post
        }
      })
    case 'DELETE_POST':
      return state.filter((post) => !(post.id === action.id))
    case 'SET_POST':
      return action.posts
    default: 
      return state
  }
}
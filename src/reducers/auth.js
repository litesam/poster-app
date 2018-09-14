export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        id: action.id,
        name: action.name
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}
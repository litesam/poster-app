import { googleAuthProvider, firebase } from '../firebase/firebase'

// Login
export const login = (id, name) => ({
  type: 'LOGIN',
  id,
  name
})

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

// Logout
export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
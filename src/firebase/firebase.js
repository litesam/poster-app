import firebase from 'firebase'

// Main database
const config = {
  apiKey: 'AIzaSyByD64DWY7jp_GtnlB70bRoLxxQjzr_0Wg',
  authDomain: 'blog-app-fdace.firebaseapp.com',
  databaseURL: 'https://blog-app-fdace.firebaseio.com',
  projectId: 'blog-app-fdace',
  storageBucket: 'blog-app-fdace.appspot.com',
  messagingSenderId: '894477875677'
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { database as default, firebase, googleAuthProvider }
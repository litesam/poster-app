import firebase from 'firebase'

// Main database
const config = {
  apiKey: "AIzaSyByD64DWY7jp_GtnlB70bRoLxxQjzr_0Wg",
  authDomain: "blog-app-fdace.firebaseapp.com",
  databaseURL: "https://blog-app-fdace.firebaseio.com",
  projectId: "blog-app-fdace",
  storageBucket: "blog-app-fdace.appspot.com",
  messagingSenderId: "894477875677"
}

firebase.initializeApp(config)

// Test database
// var config = {
//   apiKey: "AIzaSyBVXqcGMmGwyhzI-eyUzAWcVjJZjcNjo1c",
//   authDomain: "blog-app-test-e19c5.firebaseapp.com",
//   databaseURL: "https://blog-app-test-e19c5.firebaseio.com",
//   projectId: "blog-app-test-e19c5",
//   storageBucket: "blog-app-test-e19c5.appspot.com",
//   messagingSenderId: "422125885437"
// };
// firebase.initializeApp(config);
const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// const createdAt = new Date()

// const posts = {
//   createdAt: createdAt.valueOf(),
//   description: 'Hello there this is my first post',
//   note: 'Hope you enjoy this posts app'
// }

// database.ref(`users/${uuidv4()}/posts`).push(posts)

export { database as default, firebase, googleAuthProvider }
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firebase } from './firebase/firebase'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/createStore'
import 'normalize.css'
import './styles/styles.scss'
import { startSetPost } from './actions/blog';
import { login, logout } from './actions/auth';

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetPost())
    ReactDOM.render(<App />, document.getElementById('app'))
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  } else {
    store.dispatch(logout())
    ReactDOM.render(<App />, document.getElementById('app'))
    history.push('/')
  }
})
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/createStore'
import 'normalize.css'
import './styles/styles.scss'
import { startSetPost } from './actions/blog';

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

store.dispatch(startSetPost())

ReactDOM.render(<App />, document.getElementById('app'))
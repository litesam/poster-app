import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import auth from '../reducers/auth'
import posts from '../reducers/blog'
import filters from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export default createStore(
//   combineReducers({
//     posts,
//     filters
//   }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      filters,
      posts
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
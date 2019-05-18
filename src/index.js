import React           from 'react'
import ReactDOM        from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider }    from 'react-redux'
import rootReducer     from './reducers'
import setUserToken    from './helpers/setUserToken'
import setupMiddleware from './helpers/setupMiddleware'
import App             from './routers/App'
import './styles/main'

(async () => {
  try {
    const store = createStore(
      rootReducer,
      setUserToken(),
      applyMiddleware(...setupMiddleware())
    )
    
    const app = (
      <Provider store={store}>
        <App/>
      </Provider>
    )

    

    ReactDOM.render(app, document.getElementById('app'))

  } catch (error) {
    console.error('App Setup Error: ', error)
  }
})()
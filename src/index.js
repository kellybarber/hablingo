import React           from 'react'
import ReactDOM        from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider }    from 'react-redux'
import rootReducer     from 'Reducers'
import setUserToken    from 'Helpers/setUserToken'
import setupMiddleware from 'Helpers/setupMiddleware'
import { startSetVerbs } from 'Actions/verbs'
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

    store.dispatch(startSetVerbs())

    ReactDOM.render(app, document.getElementById('app'))

  } catch (error) {
    console.error('App Setup Error: ', error)
  }
})()
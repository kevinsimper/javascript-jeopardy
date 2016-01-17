import React from 'react'
import ReactDOM from 'react-dom'
import Jeopardy from './components/Jeopardy'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import jeopardyApp from './reducers'
let store = createStore(jeopardyApp)

ReactDOM.render(
  <Provider store={store}>
    <Jeopardy/>
  </Provider>,
  document.getElementById('app')
);

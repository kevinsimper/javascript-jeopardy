import React from 'react'
import ReactDOM from 'react-dom'
import Jeopardy from './components/Jeopardy'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import jeopardyApp from './reducers'
let store = createStore(jeopardyApp)

var data = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']

ReactDOM.render(
  <Provider store={store}>
    <Jeopardy data={data}/>
  </Provider>,
  document.getElementById('app')
);

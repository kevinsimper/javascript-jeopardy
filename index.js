import React from 'react'
import ReactDOM from 'react-dom'
import Jeopardy from './components/Jeopardy'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import jeopardyApp from './reducers'
import SockJS from 'sockjs-client'

let store = createStore(jeopardyApp)

ReactDOM.render(
  <Provider store={store}>
    <Jeopardy/>
  </Provider>,
  document.getElementById('app')
)

var sockjs = new SockJS('localhost:9999/echo')
sockjs.onopen = () => console.log('open')
sockjs.onmessage = (msg) => console.log('msg', msg.data)
sockjs.onclose = () => console.log('close')

window.sockjs = sockjs

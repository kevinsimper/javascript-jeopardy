import React from 'react'
import ReactDOM from 'react-dom'
import Jeopardy from './components/Jeopardy'

var data = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']

ReactDOM.render(
  <Jeopardy data={data}/>,
  document.getElementById('app')
);

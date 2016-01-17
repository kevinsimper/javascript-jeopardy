import React from 'react'
import ReactDOM from 'react-dom'
import Jeopardy from './components/Jeopardy'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import jeopardyApp from './reducers'
let store = createStore(jeopardyApp)

var data = {
  categories: [
    {
      name: 'Category 1',
      questions: [
        {
          points: 100,
          question: 'Question 1'
        },
        {
          points: 200,
          question: 'Question 1'
        },
        {
          points: 300,
          question: 'Question 1'
        },
        {
          points: 400,
          question: 'Question 1'
        },
        {
          points: 500,
          question: 'Question 1'
        }
      ]
    },
    {
      name: 'Category 1',
      questions: [
        {
          points: 100,
          question: 'Question 1'
        },
        {
          points: 200,
          question: 'Question 1'
        },
        {
          points: 300,
          question: 'Question 1'
        },
        {
          points: 400,
          question: 'Question 1'
        },
        {
          points: 500,
          question: 'Question 1'
        }
      ]
    },
    {
      name: 'Category 1',
      questions: [
        {
          points: 100,
          question: 'Question 1'
        },
        {
          points: 200,
          question: 'Question 1'
        },
        {
          points: 300,
          question: 'Question 1'
        },
        {
          points: 400,
          question: 'Question 1'
        },
        {
          points: 500,
          question: 'Question 1'
        }
      ]
    },
    {
      name: 'Category 1',
      questions: [
        {
          points: 100,
          question: 'Question 1'
        },
        {
          points: 200,
          question: 'Question 1'
        },
        {
          points: 300,
          question: 'Question 1'
        },
        {
          points: 400,
          question: 'Question 1'
        },
        {
          points: 500,
          question: 'Question 1'
        }
      ]
    },
    {
      name: 'Category 1',
      questions: [
        {
          points: 100,
          question: 'Question 1'
        },
        {
          points: 200,
          question: 'Question 1'
        },
        {
          points: 300,
          question: 'Question 1'
        },
        {
          points: 400,
          question: 'Question 1'
        },
        {
          points: 500,
          question: 'Question 1'
        }
      ]
    },
  ]
}

ReactDOM.render(
  <Provider store={store}>
    <Jeopardy data={data}/>
  </Provider>,
  document.getElementById('app')
);

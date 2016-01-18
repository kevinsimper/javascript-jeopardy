import { combineReducers } from 'redux'
import { SHOW_CARD, CLOSE_QUESTION } from './actions'

function activeQuestion (state = false, action) {
  switch (action.type) {
    case SHOW_CARD:
      return !state
      break;
    case CLOSE_QUESTION:
      return false
      break;
    default:
      return state
  }
}

var categoriesData = [
  {
    name: 'Category 1',
    questions: [
      {
        points: 100,
        question: 'Question 1'
      },
      {
        points: 200,
        question: 'Question 2'
      },
      {
        points: 300,
        question: 'Question 3'
      },
      {
        points: 400,
        question: 'Question 4'
      },
      {
        points: 500,
        question: 'Question 5'
      }
    ]
  },
  {
    name: 'Category 2',
    questions: [
      {
        points: 100,
        question: 'Question 1'
      },
      {
        points: 200,
        question: 'Question 2'
      },
      {
        points: 300,
        question: 'Question 3'
      },
      {
        points: 400,
        question: 'Question 4'
      },
      {
        points: 500,
        question: 'Question 5'
      }
    ]
  },
  {
    name: 'Category 3',
    questions: [
      {
        points: 100,
        question: 'Question 1'
      },
      {
        points: 200,
        question: 'Question 2'
      },
      {
        points: 300,
        question: 'Question 3'
      },
      {
        points: 400,
        question: 'Question 4'
      },
      {
        points: 500,
        question: 'Question 5'
      }
    ]
  },
  {
    name: 'Category 4',
    questions: [
      {
        points: 100,
        question: 'Question 1'
      },
      {
        points: 200,
        question: 'Question 2'
      },
      {
        points: 300,
        question: 'Question 3'
      },
      {
        points: 400,
        question: 'Question 4'
      },
      {
        points: 500,
        question: 'Question 5'
      }
    ]
  },
  {
    name: 'Category 5',
    questions: [
      {
        points: 100,
        question: 'Question 1'
      },
      {
        points: 200,
        question: 'Question 2'
      },
      {
        points: 300,
        question: 'Question 3'
      },
      {
        points: 400,
        question: 'Question 4'
      },
      {
        points: 500,
        question: 'Question 5'
      }
    ]
  },
]

function categories (state = categoriesData) {
  return state
}

const jeopardyApp = combineReducers({
  activeQuestion,
  categories
})

export default jeopardyApp

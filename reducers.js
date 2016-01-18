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

function questions (state, action) {
  switch(action.type) {
    case SHOW_CARD:
      return state.map((question) => {
        if(question !== action.question) {
          return question
        }
        return Object.assign({}, question, {
          completed: true
        })
      })
      break;
    default:
      return state
  }
}


function category (state = {}, action) {
  switch(action.type) {
    case SHOW_CARD:
      if(action.category !== state.name) {
        return state
      }
      return Object.assign({}, state, {
        questions: questions(state.questions, action)
      })
      break
    default:
      return state
  }
}

function categories (state = categoriesData, action) {
  switch(action.type) {
    case SHOW_CARD:
      return state.map(c => category(c, action))
    default:
      return state
  }
}

const jeopardyApp = combineReducers({
  activeQuestion,
  categories
})

export default jeopardyApp

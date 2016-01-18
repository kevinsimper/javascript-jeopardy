import React from 'react'
import Categories from '../Categories'
import styles from './style.scss'
import Question from '../Question'
import { connect } from 'react-redux'
import { showCard, closeQuestion } from '../../actions'

class Jeopardy extends React.Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className={styles.Jeopardy}>
        <div className={styles.Board}>
          <Categories data={this.props.categories} onCardClick={(category, question) => {
            dispatch(showCard(category, question))
          }} />
        </div>
        <Question active={this.props.activeQuestion} onClickQuestion={() => {
            dispatch(closeQuestion())
          }}/>
      </div>
    )
  }
}

function select (state) {
  return {
    activeQuestion: state.activeQuestion,
    categories: state.categories
  }
}

export default connect(select)(Jeopardy)

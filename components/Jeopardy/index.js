import React from 'react'
import Categories from '../Categories'
import styles from './style.scss'
import Question from '../Question'
import { connect } from 'react-redux'
import { showCard } from '../../actions'

class Jeopardy extends React.Component {
  render() {
    const { dispatch } = this.props
    console.log(this.props)
    return (
      <div className={styles.Jeopardy} onClick={() => dispatch(showCard())}>
        <div className={styles.Board}>
          <Categories data={this.props.categories} />
        </div>
        <Question active={this.props.activeQuestion}/>
      </div>
    )
  }
}

function select (state) {
  console.log(state)
  return {
    activeQuestion: state.activeQuestion,
    categories: state.categories
  }
}

export default connect(select)(Jeopardy)

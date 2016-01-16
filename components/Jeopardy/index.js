import React from 'react'
import Category from '../Category'
import styles from './style.scss'
import Question from '../Question'
import { connect } from 'react-redux'
import { showCard } from '../../actions'

class Jeopardy extends React.Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className={styles.Jeopardy} onClick={() => dispatch(showCard())}>
        <div className={styles.Board}>
          {this.props.data.map((item, id) => <Category key={id} item={item}/>)}
        </div>
        {this.props.activeQuestion &&
          <Question/>
        }
      </div>
    )
  }
}

function select (state) {
  return {
    activeQuestion: state.activeQuestion
  }
}

export default connect(select)(Jeopardy)

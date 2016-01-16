import React from 'react'
import styles from './style.scss'
import Question from '../Card'

export default class Category extends React.Component {
  render() {
    var questions = []
    for(var i = 1; i < 6; i++) {
      questions.push(<Question>{i * 100}</Question>)
    }

    return (
      <div className={styles.Category}>
        <div className={styles.Header}>{this.props.item}</div>
        {questions}
      </div>
    )
  }
}

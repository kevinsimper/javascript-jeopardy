import React from 'react'
import styles from './style.scss'

export default class Question extends React.Component {
  render() {
    return (
      <div className={styles.Question}>
        {this.props.children}
      </div>
    )
  }
}

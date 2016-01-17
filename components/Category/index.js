import React from 'react'
import styles from './style.scss'
import Card from '../Card'

export default class Category extends React.Component {
  render() {
    return (
      <div className={styles.Category}>
        <div className={styles.Header}>{this.props.data.name}</div>
        {this.props.data.questions.map((item) => {
          return <Card>{item.points}</Card>
        })}
      </div>
    )
  }
}

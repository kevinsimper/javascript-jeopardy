import React from 'react'
import Category from '../Category'
import styles from './style.scss'

export default class Jeopardy extends React.Component {
  render() {
    return (
      <div className={styles.Jeopardy}>
        {this.props.data.map((item, id) => <Category key={id} item={item}/>)}
      </div>
    )
  }
}

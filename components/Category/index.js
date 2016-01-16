import React from 'react'
import styles from './style.scss'

export default class Category extends React.Component {
  render() {
    return (
      <div className={styles.Category}>{this.props.item}</div>
    )
  }
}

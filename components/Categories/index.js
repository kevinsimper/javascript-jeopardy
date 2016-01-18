import React from 'react'
import Category from '../Category'
import styles from './style.scss'

export default class Categories extends React.Component {
  render() {
    return (
      <div className={styles.Categories}>
        {this.props.data.map((item, key) => {
          return <Category key={key} data={item} onCardClick={this.props.onCardClick}/>
        })}
      </div>
    )
  }
}

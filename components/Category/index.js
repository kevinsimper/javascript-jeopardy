import React from 'react'
import styles from './style.scss'
import Card from '../Card'

export default class Category extends React.Component {
  onClick(category, question) {
    this.props.onCardClick(category, question)
  }
  render() {
    return (
      <div className={styles.Category}>
        <div className={styles.Header}>{this.props.data.name}</div>
        {this.props.data.questions.map((item, key) => {
          return <Card key={key} onClick={this.onClick.bind(this, this.props.data.name, item)} item={item}/>
        })}
      </div>
    )
  }
}

import React from 'react'
import styles from './style.scss'

export default class Question extends React.Component {
  getStyles() {
    if(this.props.item.completed) {
      return {
        opacity: 0.5,
        background: '#D3D3D3'
      }
    } else {
      return {}
    }
  }
  render() {
    return (
      <div className={styles.Question} onClick={this.props.onClick} style={this.getStyles()}>
        {this.props.item.points}
      </div>
    )
  }
}

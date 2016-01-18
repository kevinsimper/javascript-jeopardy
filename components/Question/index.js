import React from 'react'
import styles from './style.scss'
import { TransitionMotion, spring } from 'react-motion'

export default class Question extends React.Component {
  getStyles() {
    if(this.props.active) {
      return {
        question: {
          width: spring(100),
          opacity: spring(1),
          position: spring(0)
        }
      }
    } else {
      return {}
    }
  }
  willEnter() {
    return {
      width: spring(0),
      opacity: spring(0),
      position: spring(440)
    }
  }
  willLeave() {
    return {
      width: spring(0),
      opacity: spring(0),
      position: spring(440)
    }
  }
  onClick() {
    this.props.onClickQuestion()
  }
  render() {
    return (
      <TransitionMotion styles={this.getStyles()} willEnter={this.willEnter} willLeave={this.willLeave}>
        {value => {
          if(value.question) {
            let inlineStyles = {
              width: value.question.width + '%',
              height: value.question.width + '%',
              opacity: value.question.opacity,
              zoom: value.question.width + '%',
              top: value.question.position,
              left: value.question.position
            }
            return (
              <div className={styles.Question} style={inlineStyles} onClick={this.onClick.bind(this)}>
                Who invented JavaScript?
              </div>
            )
          } else {
           return <div></div>
          }
        }}
      </TransitionMotion>
    )
  }
}

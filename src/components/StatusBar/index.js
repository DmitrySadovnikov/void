import cl from 'classnames'
import React, { Component } from 'react'
import style from './style.module.css'
import moment from 'moment'

class StatusBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: props.status,
      time: props.time,
    }
  }

  render() {
    const {
      status,
      time,
    } = this.state

    return (
      <div className={cl(style.root)}>
        <div>{status}</div>
        <div>{moment(time).format('hh:mm DD.MM.YYYY')}</div>
      </div>
    )
  }
}

export default StatusBar

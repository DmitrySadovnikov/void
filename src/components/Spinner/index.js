import React from 'react'
import logo from './logo.png'
import style from './style.module.css'

function Spinner() {
  return (
    <div className={style.root}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt='logo'/>
      </header>
    </div>
  )
}

export default Spinner

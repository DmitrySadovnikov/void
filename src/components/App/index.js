import React from 'react'
import TorrentPosts from '../TorrentPosts/index'
import Transfers from '../Transfers/index'
import { BrowserRouter, Route } from 'react-router-dom'
import style from './style.module.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/es/Button'
import logo from '../../assets/logo.png'
import cl from 'classnames'

function App() {
  return (
    <div className={cl(style.root)}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img src={logo} className={cl(style.logo)} alt='void'/>
          <Button color="inherit" href="/">Posts</Button>
          <Button color="inherit" href="/transfers">Transfers</Button>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={TorrentPosts}/>
          <Route path='/transfers' component={Transfers}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

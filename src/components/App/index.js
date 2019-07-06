import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/es/Button'
import cl from 'classnames'
import logo from '../../assets/logo.png'
import style from './style.module.css'
import TorrentPosts from '../TorrentPosts/index'
import Transfers from '../Transfers/index'

function App() {
  return (
    <div className={cl(style.root)}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <img src={logo} className={cl(style.logo)} alt='void'/>
          <Button color='inherit' href='/'>Posts</Button>
          <Button color='inherit' href='/transfers'>Transfers</Button>
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

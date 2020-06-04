
import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'
import './style/bass.scss'
import jquery from 'jquery'
// import Router from './router/router.js'

import './utils/rem'
window.$ = jquery
ReactDom.render(
  <App/>,
  document.getElementById('root')
)
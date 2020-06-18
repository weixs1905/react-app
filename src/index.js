
import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'
import './style/bass.scss'
import './utils/rem'
import dialog from './utils/dialog'
import cookie from './utils/cookie'
React.$dialog = dialog
React.cookie = cookie

ReactDom.render(
  <App/>,
  document.getElementById('root')
)
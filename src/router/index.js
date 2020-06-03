import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'
import {Redirect,} from 'react-router'
import routes from './routes'
import List from '../list/List'
export default class routers extends Component{
  render(){
    return (
      <Router>
        <Switch>
          {/* <Route routes={routes}/> */}
          <Route path='/list' component={List} exact />
          <Redirect path='/' to='/list'/>
        </Switch>
      </Router>
    )
  }
}
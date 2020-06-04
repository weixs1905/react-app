import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
// import {Redirect,} from 'react-router'
import routes from './routes'
import List from '../list/List'
// let List = ()=> import('../list/List')
export default class routers extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          {/* <Route routes={routes}/> */}
          <Route path='/list' component={List} />
          <Redirect exact from='/' to='/list'/>
        </Switch>
      </HashRouter>
    )
  }
}
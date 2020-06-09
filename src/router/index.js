import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
// import {Redirect,} from 'react-router'
import routes from './routes'
import List from '../list/List'
import Detail from '../detail/detail'

// let List = ()=> import('../list/List')
export default class routers extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          {/* <Route routes={routes}/> */}
          <Route path='/list' component={List} />
          <Route path='/detail/:id' component={Detail} />
          <Redirect exact from='/' to='/list'/>
        </Switch>
      </HashRouter>
    )
  }
}
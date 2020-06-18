import React,{Component} from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './components/header/header'
// import Footer from './footer/Footer'
import Router from './router/index'
import routes from './router/routes'
class App extends Component{
 
  render() {
    console.log(this.props)
    return(
      <div>
        {/* <Header /> */}
        <HashRouter>
          <Router routes={routes}></Router>
        </HashRouter>
        {/* <Footer/> */}
      </div>
    )
  }
}
export default App
import React,{Component} from 'react'
import Header from './header/header'
import Footer from './footer/Footer'
import Router from './router/index'
class App extends Component{
 
  render() {
    return(
      <div>
        <Header/>
        <Router/>
        {/* <Footer/> */}
      </div>
    )
  }
}
export default App
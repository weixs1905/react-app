import React,{Component} from 'react'
import Header from './header/header'
import Footer from './footer/Footer'
class App extends Component{
 state = {
  val:1,
 }
  componentDidMount(){
    
  }
  render() {
    return(
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}
export default App
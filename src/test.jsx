import React,{Component} from 'react'
import './test.scss'
class Test extends Component{
  render(){
    return(
    <div className='div'>{this.props.val}</div>
    )
  }
}
export default Test



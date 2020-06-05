import React,{Component} from 'react'
import { Icon, Grid,Popover ,NavBar} from 'antd-mobile';
import './header.scss'

const Item = Popover.Item
const myImg = require('../assets/img/nav-logo.png');
class Header extends Component{
  state ={
    visible:false,
    selected:''
  }
  render(){
    return(
      // <div>
        <div className='header' id='header'>
          <div className='logo'>
            <img src={myImg} alt=""/>
          </div>
          <div className='title'>
            创作你的创作
          </div>
        </div>
      // </div>
    )
  }
}
export default Header
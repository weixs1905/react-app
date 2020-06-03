import React,{Component} from 'react'
import { Icon, Grid,Popover ,NavBar} from 'antd-mobile';
import './header.scss'
const Item = Popover.Item
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Header extends Component{
  state ={
    visible:false,
    selected:''
  }
 
  render(){
    return(
      <div>
        <div className='header'>
          <div className='logo'>
            <img src="//cdn2.jianshu.io/asimov/src/assets/image/nav-logo.faf216af.png" alt=""/>
          </div>
          <div className='title'>
            创作你的创作
          </div>
        </div>
      </div>
    )
  }
}
export default Header
import React,{Component} from 'react'
import {login} from '../../api/index.js'
import qs from 'qs'
import './index.scss'
class Login extends Component{
  state = {
    username:'',//用户名
    password:''//密码
  }
  //关闭
  goback = ()=>{
    this.props.history.goBack()
  }
  bindusername = (e)=>{
    this.setState({
      username:e.target.value
    })
  }
  bindpassword = (e)=>{
    this.setState({
      password:e.target.value
    })
  }
  //登录
  login = ()=>{
    let {username,password} = this.state
    if(username == '') return React.$dialog.toast('请输入用户名')
    if(password == '') return React.$dialog.toast('请输入密码')
    login(qs.stringify({
      username,
      password
    }))
    .then((res)=>{
      let info = res.userInfo
      if(info){
        if(info.status == 1){
          React.cookie.set('token',info.token)
        }else{
          React.cookie.set('token','TOKEN')
          React.$dialog.error(info.msg)
        }

      }
    })
  }
  render(){
    let {username,password} = this.state
    return(
      <div className='login'>
        <div className="icon-guanbi close" onClick={this.goback}></div>
        <div className="form">
          <h3>登录简书</h3>
          <p>
            <i className='icon-zhanghao'></i>
            <input type="text" placeholder='请输入账号：admin' value={username} onChange={this.bindusername.bind(this)}/>
          </p>
          <p>
            <i className='icon-mima1'></i>
            <input type="text" placeholder='请输入密码：123456' value={password} onChange={this.bindpassword.bind(this)}/>
          </p>
        </div>
        <div className="button" onClick={this.login}>
          登录
        </div>
      </div>
    )
  }
}
export default Login
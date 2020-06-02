import React,{Component} from 'react'
import './Footer.scss'
class Footer extends Component{
  state ={
    footerlist:[
      {name:'首页'},
      {name:'发现'},
      {name:'广场'},
      {name:'我的'},
    ],
    isCurrent:0
  }
  tabChange = (index)=>{
    console.log(index)
    //注意：setstate在react控制的函数中是异步的，比如事件函数，所以调用 setstate后不能同步拿到最新的值
    this.setState({
      isCurrent:index
    },function(){
      console.log(this.state.isCurrent,'xxx')

    })
  }
  render(){
    return(
      <div>
        <div className='footer'>
          <ul className='list'>
            {
              this.state.footerlist.map((item,index) =>{
                return(
                <li key={index} className={this.state.isCurrent==index?'active':null} onClick={()=>this.tabChange(index)}>{item.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Footer
import React,{Component} from 'react'
import qs from 'qs'
import {getList,detailInfo} from '../api/index'
import './detail.scss'
class Detail extends Component{
  state={
    id:''
   
  }
  componentWillMount(){
    this.setState({
      id:this.props.match.params.id
    },function(){
      console.log(this.state.id)
    })
  }

  
  
  render(){
    return(
      <div className='detail' id='detail'>
        <div className='title'>多发发</div>
        <div className='authorInfo'>
          <p>
            <img src="http://img4.imgtn.bdimg.com/it/u=2858624356,1431118860&fm=26&gp=0.jpg" alt=""/>
            <span>毒毒毒毒毒</span>
          </p>
          <p>
            <img src="http://img4.imgtn.bdimg.com/it/u=2858624356,1431118860&fm=26&gp=0.jpg" alt=""/>
            <span>毒毒毒毒毒</span>
          </p>
        </div>
        <div className='otherInfo'>
          <span><i className='icon-zuanshi' style={{color:'#ea6f5a',marginRight:'0.1rem'}}></i>333</span>
          <span>sssssss</span>
          <span><i className='icon-shouji'></i>打开APP</span>
        </div>
        <div className="content">
          <div>
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发发发发发
            谁打发的发发发的撒的说法撒发发发
          </div>
        </div>
        <div className='lookAll'>
          阅读全文
          <i className='icon-shuangjiantouxia'></i>
        </div>
        <div className='star'>
          <div className="firstline">
            <p>
              点赞赚钻<span style={{color:'#ea6f5a'}}>最高日赚数百元</span>
            </p>
            <span className='line'></span>
          </div>
          <div style={{color:'#888'}}>
            <i className='icon-zan' style={{fontSize:'1.2rem'}}></i>
            <span style={{fontSize:'.26rem'}}>赞66</span>
          </div>

        </div>
      </div>
    )
  }
}
export default Detail
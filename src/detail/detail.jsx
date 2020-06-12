import React,{Component} from 'react'
import qs from 'qs'
import {getList,detailInfo} from '../api/index'
import './detail.scss'
class Detail extends Component{
  state={
    id:'',
    logo:require('../assets/img/misc-logo.805143dd.png'),
    lookAll:false
   
  }
  componentWillMount(){
    this.setState({
      id:this.props.match.params.id
    })
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.refs.div.style.width = 50+"%"
    // }, 1000);
  }
  lookAll = ()=>{
    this.setState({
      lookAll:true
    })
  }
  download = ()=>{
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isAndroid) {
        var ua = navigator.userAgent.split("(")[1].split(")")[0];
        // alert(ua);
        var phone = [/IPHONE/gi, /huawei/gi, /mi/gi, /vivo/gi, /OPPO/gi, /samsung/gi, /SONY/gi, /Nokia/gi, /HTC/gi, /ZTE/gi, /Lenovo/gi, /ZUK/gi,]
        if (phone[1].test(ua)) {
            window.location.href='https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C10322912?source=appshare&subsource=C10322912';
        } else if (phone[2].test(ua)) {
            window.location.href='http://m.app.mi.com/?word=%E7%AE%80%E4%B9%A6#page=detail&id=74526';
        } else {
            var uas = navigator.userAgent.toLowerCase();
            if(uas.match(/MicroMessenger/i)=="micromessenger") {
            window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.jianshu.haruki&g_f=undefined#opened';
            }else{
                window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.jianshu.haruki&g_f=undefined#opened';
            }
        }
    }
    if (isIOS) {
        window.location.href='https://apps.apple.com/cn/app/%E7%AE%80%E4%B9%A6-%E5%88%9B%E4%BD%9C%E4%BD%A0%E7%9A%84%E5%88%9B%E4%BD%9C/id888237539';
    }
  }

  
  
  render(){
    return(
      
      <div className='detail' id='detail'>
        {/* <div className="progress">
          <div ref='div'></div>
        </div> */}
        <div className='title'>多发发</div>
        <div className='authorInfo'>
          <p>
            <img src="http://img4.imgtn.bdimg.com/it/u=2858624356,1431118860&fm=26&gp=0.jpg" alt=""/>
            <span>毒毒毒毒毒</span>
          </p>
          <p>
            {/* <img src="http://img4.imgtn.bdimg.com/it/u=2858624356,1431118860&fm=26&gp=0.jpg" alt=""/> */}
            <i className='icon-xunzhang' style={{color: '#ea6f5a',fontSize:'.4rem',marginRight:'.1rem'}}></i>
            <span>简书创作者</span>
          </p>
        </div>
        <div className='otherInfo'>
          <span><i className='icon-zuanshi' style={{color:'#ea6f5a',marginRight:'0.1rem'}}></i>333</span>
          <span>sssssss</span>
          <span><i className='icon-shouji'></i>打开APP</span>
        </div>
        <div className={['content',this.state.lookAll?'active':null].join(' ')}>
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
          <div className='mark' style={{display:this.state.lookAll?'none':'block'}}></div>
        </div>
        <div className='lookAll' onClick={this.lookAll} style={{display:this.state.lookAll?'none':'block'}}>
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
        <div className='zan'>
          <div className='left'>
            <img src="http://img4.imgtn.bdimg.com/it/u=2858624356,1431118860&fm=26&gp=0.jpg" alt=""/>
            <p>
              <span style={{fontSize:'.3rem',fontWeight:'bold',lineHeight:'.42rem'}}>大大大大大大的</span>
              <span style={{fontSize:'.24rem',color:'#999',lineHeight:'.34rem',paddingTop:'.04rem'}}>小礼物走一走，来简书关注我</span>
            </p>
          </div>
          <div className='right'>
            赞赏
          </div>
        </div>
        <div className='comment'>
          <div className='top'>
            <span>精彩评论</span>
            <span><i className='icon-pinglun' style={{marginRight:'.02rem'}}></i>写评论</span>
          </div>
          <div className='bottom'>
            <div className='listItem'>
              <img src="http://img4.imgtn.bdimg.com/it/u=2858624356,1431118860&fm=26&gp=0.jpg" alt=""/>
              <div className='r_detail'>
                <p className='f_line'>sssssss</p>
                <p className='s_line'>事实上身上事实上事实上事实上事实上事实上身上</p>
                <p className="t_line">
                  <li>
                    <span style={{marginRight:'.08rem'}}>30楼</span>
                    <span>06 30 13:45</span>
                  </li>
                  <li>
                    <span className='icon-liuyan'></span>
                    <span style={{marginLeft:'.5rem'}}>5<i className='icon-good' style={{marginLeft:'.01rem'}}></i></span>
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div>
            <img src={this.state.logo} alt=""/>
            <p>
              <span>创作你的创作</span>
              <span>接受世界的赞赏</span>
            </p>
          </div>
          <ul>
            <li>登录</li>
            <li>打开APP</li>
            <li>热门文章</li>
          </ul>
        </div>
        <div className="btn" onClick={()=>this.download()}>打开APP，看更多相似好文</div>
      </div>
    )
  }
}
export default Detail
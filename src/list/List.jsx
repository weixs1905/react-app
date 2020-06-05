import React,{Component} from 'react'
import {getList} from '../api/index'
import './index.scss'
import hotWord from '../mockdata/hotword'
const hot_num = 7//定义每次展示几个热词
let hot_word = hotWord
class List extends Component{
  state={
    hotWord_list:[],//最终页面中展示的数组
    tempList:[],//保存原热词数组中每次被截掉的元素
    isFrash:false,
    articleList:[],
    timer:null,
    hasImg:'',//文章是否有预览图，1有2没有
  }
  componentWillMount(){
    this.filterHotWord(hot_num,1)
    this.getlist()
  }
  //热词过滤，每次显示num个
  filterHotWord=(num,type)=>{
    let {timer} = this.state
    if(type == 2){
      //节流
      if(timer) return;
      this.setState({
        isFrash:true,
        timer:setTimeout(()=>{
          this.setState({
            isFrash:false
          })
          clearTimeout(timer)
          this.setState({timer:null})
          
        },500)
      })
      
    }
    let arr=[]
    if(hot_word.length>=num){
       arr = hot_word.slice(0,num)
       hot_word.splice(0,num)
      }else{
        arr = hot_word.slice(0)
        hot_word.splice(0)
      }
      this.setState({
        tempList:this.state.tempList.concat(arr),
        hotWord_list:arr,
      },function(){
        if(hot_word.length == 0){
          hot_word = this.state.tempList
          this.setState({
            tempList:[]
          })
        }
      })
  }
  //获取文章列表
  getlist = ()=>{
    getList().then(res=>{
      this.setState({
        articleList:res.list
      })
    })
  }
  render(){
    return(
      <div className='list' id='list'>
        <div className='hot'>
          <p>热门专题</p>
          <p onClick={()=>{this.filterHotWord(hot_num,2)}}>
            <i className={`icon-refresh-line ${this.state.isFrash?"refrash":null}`}></i>
            <span>换一换</span>
          </p>
        </div>
        <div className='hotword'>
          {
            this.state.hotWord_list.map(item =>{
              return(
              <p key={item.id}>{item.txt}</p>
              )
            })
          }
          
        </div>
        <div className='content'>
          {
            this.state.articleList.map(item =>{
              return(
                <div key={item.id} className='item'>
                  <div className='left'>
              <div className='title'>{item.title}</div>
                    <div className='introduce'>
                    {item.content}
                    </div>
                    <div className='info'>
                      <p>
                        <i className='icon-zuanshi' style={{color:'#ea6f5a',marginRight:'0.1rem'}}></i>
                        <span>{item.stone}</span>
                      </p>
                      <p>
                        <span>{item.author}</span>
                      </p>
                      <p>
                        <i className='icon-liuyan' style={{color:'#b1b1b1',marginRight:'0.1rem',lineHeight:"0.38rem"}}></i>
                        <span>{item.commont}</span>
                      </p>
                      <p>
                        <i className='icon-lujing' style={{color:'#b1b1b1',marginRight:'0.1rem'}}></i>
                        <span>{item.star}</span>
                      </p>
                    </div>
                  </div>
                  {
                    item.type == 1?
                    (
                      <div className='right'>
                        <img src={item.img} alt=""/>
                      </div>
                    ):null
                  }
                </div>
              )
            })
          }
        </div>
        <div className='loadMore'>
          <p>
            <span>展开更多文章</span>
            <i className='icon-jiantou-copy-copy'></i>
          </p>
        </div>
      </div>
    )
  }
}
export default List
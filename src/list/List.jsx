import React,{Component} from 'react'
import './index.scss'
import hotWord from '../mockdata/hotword'
import $ from 'jquery'
const hot_num = 7//定义每次展示几个热词
let hot_word = hotWord
class List extends Component{
  state={
    hotWord_list:[],//最终页面中展示的数组
    tempList:[],//保存原热词数组中每次被截掉的元素
    isFrash:false,
    articleList:[1,1,1,1,1,1,1,1]
  }
  componentWillMount(){
    this.filterHotWord(hot_num)
    this.getlist()
  }
  componentDidMount(){
    // let h_height = document.getElementById('header').offsetHeight
    // document.getElementById('list').style.marginTop = h_height/50+'rem'
    // console.log(h_height)
  }
  //热词过滤，每次显示num个
  filterHotWord=(num)=>{
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
        isFrash:true
      },function(){
        if(hot_word.length == 0){
          hot_word = this.state.tempList
          this.setState({
            tempList:[]
          })
        }
      })
      // this.setState({
      //   isFrash:false
      // })
  }
  getlist = ()=>{
    $.ajax({
           type : "GET",
           url : 'https://www.easy-mock.com/mock/5ed8c2f0d4531151437ec49c/api/list', 
           success : function(html){
             console.log(html);
          }
      });
  }
  render(){
    return(
      <div className='list' id='list'>
        <div className='hot'>
          <p>热门专题</p>
          <p onClick={()=>{this.filterHotWord(hot_num)}}>
            <i className={`icon-refresh-line`}></i>
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
                <div className='item'>
                  <div className='left'>
                    <div className='title'>工地上的红人-喜妹</div>
                    <div className='introduce'>
                    成熟是什么？ 总有人觉得，成熟跟年龄正相关，一个人年龄越大，就会越成熟，什么都懂，也能好好做自己，与之相反，一个人...
                    </div>
                    <div className='info'>
                      <p>
                        <i className='icon-zuanshi' style={{color:'#ea6f5a',marginRight:'0.1rem'}}></i>
                        <span>33.9</span>
                      </p>
                      <p>
                        <span>吃鱼的猫</span>
                      </p>
                      <p>
                        <i className='icon-liuyan' style={{color:'#b1b1b1',marginRight:'0.1rem'}}></i>
                        <span>33.9</span>
                      </p>
                      <p>
                        <i className='icon-lujing' style={{color:'#b1b1b1',marginRight:'0.1rem'}}></i>
                        <span>33</span>
                      </p>
                    </div>
                  </div>
                  <div className='right'>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591279773930&di=95d2c163ed03f9037a617d87ce2e407a&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F55e736d12f2eb938ea5241a6d1628535e5dd6fa2.jpg" alt=""/>
                  </div>
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
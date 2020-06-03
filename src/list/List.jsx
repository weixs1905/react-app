import React,{Component} from 'react'
import './index.scss'
import hotWord from '../mockdata/hotword'
const hot_num = 7
class List extends Component{
  state={
    hotWord_list:[],
    newlist:[]
  }
  componentWillMount(){
    this.filterHotWord(hot_num)
  }
  //热词过滤，每次显示num个
  filterHotWord=(num)=>{
    
    if(hotWord.length!=0){
      let arr = hotWord.slice(0,hotWord.length>=num?num:null)
      this.setState({
        newlist:this.state.newlist.concat(arr),
        hotWord_list:arr
      })
      hotWord.splice(0,hotWord.length>=num?num:null)
    }
    console.log(hotWord)
    if(hotWord.length == 0){
      
      hotWord = this.state.newlist
      this.setState({
        newlist:[]
      })
    }

    

  }
  render(){
    return(
      <div className='list'>
        <div className='hot'>
          <p>热门专题</p>
          <p onClick={()=>{this.filterHotWord(hot_num)}}>
            <i className='icon-refresh-line'></i>
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
      </div>
    )
  }
}
export default List
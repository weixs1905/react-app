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
  goback = ()=>{
    
  }
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    })
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    })
  }
  render(){
    let pop = (
      // <div>
        <Popover mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={this.state.visible}
          overlay={[
            (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
            (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
            (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
              <span style={{ marginRight: 5 }}>Help</span>
            </Item>),
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-10, 0],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
        </Popover>
      // </div>
    )
    return(
      <div>
        <div className='header'>
          {/* <p onClick={this.goback()}><Icon type='left'/></p> */}
          <p className='title'>春风十里不如你</p>
          <p className='more'>
            <Icon type='ellipsis'/>
            <div>{pop}</div>
            
            
          </p>
        </div>
      </div>
    )
  }
}
export default Header
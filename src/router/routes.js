import list from '../pages/list/List.jsx'
import detail from '../pages/detail/detail.jsx'
import login from '../pages/login/login.jsx'

let routes = [
  {
    path:'/login',
    component:login,
    state:{
      showHead:false
    }
    
  },
  {
    path:'/list',
    component:list,
    state:{
      showHead:false
    }
  },
  {
    path:'/detail/:id',
    component:detail,
    state:{
      showHead:false
    }
  },
  {
    path:'/',
    redirect:'/list'
  },
  
]
export default routes
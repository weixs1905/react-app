import list from '../pages/list/List.jsx'
import detail from '../pages/detail/detail.jsx'

let routes = [
  {
    path:'/list',
    component:list
  },
  {
    path:'/detail/:id',
    component:detail
  },
  {
    path:'/',
    redirect:'/list'
  },
  
]
export default routes
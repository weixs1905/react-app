import App from '../App'
import List from '../list/List'
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: List },
    childRoutes: [
      { path: '/list', component: List },
      
    ]
  }
]
export default routeConfig;
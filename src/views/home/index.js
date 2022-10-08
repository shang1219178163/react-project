// import { renderRoutes } from 'react-router-config'
// import { NavLink, Link } from "react-router-dom";
import { routes,} from '../../router/index.js'


export default function Home () {
  // return <h1>Home</h1>
  return routes.map((route, i) => (
    // <RouteWithSubRoutes key={i} {...route} />
    // <NavLink to={route.path} key={route.path}>{route.label}</NavLink>
    <button 
      key={route.path} 
      onClick={ ()=> console.log(route.path) }
      >
    {route.label}
    </button>
  ));
}

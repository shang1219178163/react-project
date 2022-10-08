// import { renderRoutes } from 'react-router-config'
import { routes } from '../router/index.js'

export function Home () {
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

export function About() {
  return <h1>About</h1>
}

export function Unknown() {
  return <h1>Unknown</h1>
}

export function Mall() {
  return <h1>Mall</h1>
}

export function Mobile() {
  return <h1>Mobile</h1>
}

export function Desktop() {
  return <h1>Desktop</h1>
}

export function Laptop() {
  return <h1>Laptop</h1>
}

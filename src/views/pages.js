import { renderRoutes } from 'react-router-config'

export function Home ({ route }) {
  return (<> 
    {renderRoutes(route.routes)}
  </>)
}

export function About() {
  return <h1>About</h1>
}

export function Unknown() {
  return <h1>Unknown</h1>
}

export function Electronics() {
  return <h1>Electronics</h1>
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

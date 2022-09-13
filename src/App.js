
// // import logo from './logo.svg';
// import './App.css';

// import RButton from './components/RButton';
// import Counter from './components/Counter';
// import CounterOne from './components/CounterOne';
// import UseRefDemo from './views/UseRefDemo';


// function App() {
//   function handleSubmit(e) {
//     // e.preventDefault();
//     console.log('You clicked submit.');
//   }

//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <div className='box-grid'>
//         <RButton color="red" onClick={handleSubmit}>red</RButton>
//         <RButton color="blue" onClick={handleSubmit}>blue</RButton>
//         <RButton color="green" onClick={handleSubmit}>green</RButton>
//         <RButton color="red" isOutline onClick={handleSubmit}>red</RButton>
//         <RButton color="blue" isOutline onClick={handleSubmit}>blue</RButton>
//         <RButton color="green" isOutline onClick={handleSubmit}>green</RButton>
//       </div>

//       {/* <button className='danger' onClick={handleSubmit}>button</button> */}

//       <Counter></Counter>
//       <CounterOne></CounterOne>
//       <UseRefDemo></UseRefDemo>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from './router/index.js'

function App() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
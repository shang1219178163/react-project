import logo from './logo.svg';
import './App.css';

import RButton from './components/RButton';

function App() {
  function handleSubmit(e) {
    // e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='box-grid'>
        <RButton color="red" onClick={handleSubmit}>red</RButton>
        <RButton color="blue" onClick={handleSubmit}>blue</RButton>
        <RButton color="green" onClick={handleSubmit}>green</RButton>
        <RButton color="red" isOutline onClick={handleSubmit}>red</RButton>
        <RButton color="blue" isOutline onClick={handleSubmit}>blue</RButton>
        <RButton color="green" isOutline onClick={handleSubmit}>green</RButton>
      </div>

      {/* <button className='danger' onClick={handleSubmit}>button</button> */}
    </div>
  );
}

export default App;


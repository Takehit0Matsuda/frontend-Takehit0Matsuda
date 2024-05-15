import logo from './logo.svg';
import './App.css';

function App() {

  let state = {name1: 'にんじゃわんこ', count: 0};

  function handleClick(name){
    state.name1 = name;
  }

  return (
    <div className="App">
      <header className="App-header">
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
        <button>わかった?</button>

        <h1>こんにちは、{state.name1}さん！</h1>
        <button onClick={() => {handleClick("ひつじ仙人")}}>ひつじ仙人</button>
        
        <button onClick={() => {handleClick("にんじゃわんこ")}}>にんじゃわんこ</button>

        <h1>
          {state.count}          
        </h1>
        <button>+</button>
      </header>
    </div>
  );
}

export default App;

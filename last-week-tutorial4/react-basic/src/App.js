import logo from './logo.svg';
import './App.css';
// import Article from "./components/Article";
// import Button from "./components/Button";
import { useState } from 'react';
import {Article, Button, TextInput} from './components/index';

function App() {
  const [clicked, setClicked] = useState(0);
  const clickCounter = () => {
      setClicked(prevState => prevState+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          ハロー！React！
        </p>
        <>
            <Article
                title={'Take\'s React page'}
                content={"this is for an experiment"}
            />
            <Button
                message={"Click Here!"}
                clicked={clicked} onClick={clickCounter}
            />
            <TextInput/>
        </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

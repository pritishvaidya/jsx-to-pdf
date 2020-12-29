import logo from './logo.svg';

import './App.css';

import { JsxToPdf } from "jsx-to-pdf";

function App() {
  return (
    <JsxToPdf>
      {({ save, jsxRef, error, errorText }) => {
        return (
          <div className="App" ref={jsxRef}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
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
              <button style={{ height: 50, margin: 20, backgroundColor: '#61dafb' }} onClick={save}>Download PDF for this Page</button>
            </header>
          </div>
        )
      }}
    </JsxToPdf>
  );
}

export default App;

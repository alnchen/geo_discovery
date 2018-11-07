import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Discover from './components/discover';

class App extends Component {
  render() {
    return (
      <div className="App">

        <HashRouter>
          <div>
            <Route path="/discover/" component={Discover} />
            <Route exact path="/">
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
                <Link to="/discover/">Discover!</Link>
              </header>
            </Route>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

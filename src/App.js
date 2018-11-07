import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Discover from './components/discover';

class App extends Component {
  render() {
    return <div className="App">
        <HashRouter>
          <div>
            <Route path="/discover/" component={Discover} />
            <Route exact path="/">
              <header className="App-header">
                <Link className="App-link" to="/discover/">
                  <span role="img" aria-label="Goat">
                    🐑:
                  </span>
                  <img src="https://s3.amazonaws.com/s3.weei.com/s3fs-public/styles/nts_image_cover_tall_775x425/public/Klay%20Thompson.jpg?itok=juzvRjHr&c=b7b374c148cb90e1e6be464e47119fb9" alt="kt" />
                </Link>
              </header>
            </Route>
          </div>
        </HashRouter>
      </div>;
  }
}

export default App;

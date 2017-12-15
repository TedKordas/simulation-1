import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import routes from './routes';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
        <h1 className="App-title">SHELFIE</h1>
        </header>
        <div className="Shelf-A">
        <Link to='/shelfA'><p className="A-text">Shelf A</p></Link>
        </div>
        <div className="Shelf-B">
          <p className="B-text">Shelf B</p>
        </div>
        <div className="Shelf-C">
          <p className="C-text">Shelf C</p>
        </div>
        <div className="Shelf-D">
        <p className="D-text">Shelf D</p>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;

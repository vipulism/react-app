import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Nav from './components/nav';
const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>

          { /*
          <Route path="/users">
            <Users />
      </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            new Edit <code>src/App.tsx</code> and save to reload.
    </p>
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
    </Router>
  );
}

export default App;

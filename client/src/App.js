import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import NBA from './pages/NBA'
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/NBA' component={NBA} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

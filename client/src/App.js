import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Tabs from './components/Tabs/Tabs'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Tabs />
      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/NBA' component={NBA} />
            <Route exact path='/MLB' component={MLB} />

          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;

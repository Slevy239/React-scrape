import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Tabs from './components/Tabs/Tabs'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home'
// import Tabs from '../src/components/Tabs'
import Drawer from './components/Drawer/Drawer'
import MLB from '../src/pages/MLB'
import NBA from '../src/pages/NBA'

function App() {
  return (
    <div>
      {/* <Drawer /> */}
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Tabs} />
            <Route exact path="/male" component={MLB} />
            <Route exact path="/female" component={NBA} />

          </Switch>
        </div>
      </Router>
    </div>
    // <div className="App">
    //   <Tabs />
    // </div>
  );
}

export default App;

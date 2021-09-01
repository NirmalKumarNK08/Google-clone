import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
          </Route>
          <Route path="/home">
          </Route>
        </Switch>

        {/* Homepage with text-box or searchbox, buttons. */}
        <Home />

        {/* Homepage with text-box or searchbox, buttons. */}
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import HomePage from './components/views/HomePage/HomePage';
import GamePage  from "./components/views/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/game" component={GamePage} />
      </Switch>
    </div>
  );
}

export default App;
 
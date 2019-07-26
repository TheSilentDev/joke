import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Joke from './components/Joke'
import NavigationalMenu from "./components/NavigationalMenu";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <NavigationalMenu/>
      <PrivateRoute exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/jokes" component={Joke}/>
    </Router>
  );
}

export default App;

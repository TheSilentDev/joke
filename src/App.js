import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Joke from "./components/Joke";
import Unauthenticated from "./components/Unauthenticated";
import NavigationalMenu from "./components/NavigationalMenu";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {}

  render() {
    return (
      <Router>
        <NavigationalMenu />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/jokes" component={Joke} />
      </Router>
    );
  }
}

export default App;

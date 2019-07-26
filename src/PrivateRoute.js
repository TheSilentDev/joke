import {Redirect, Route} from "react-router-dom";
import React from "react";


const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }} />
  )} />
);

export default PrivateRoute;
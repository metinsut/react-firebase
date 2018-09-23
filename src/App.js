import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from './component/header/header.js';
import Home from "./component/home/home.js";
import Firebase from "./component/firebase/firebase";
import Login from "./component/login/login";
import signUp from './component/signUp/signUp.js';
import { ALLPAGES, HOME, FIREBASE, LOGIN, SIGNUP } from "./constant/routesPath";


class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent {...this.props}/>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route path={FIREBASE} component={Firebase} />
        </Switch>
        <Route path={ALLPAGES + LOGIN} component={Login} />
        <Route path={ALLPAGES + SIGNUP} component={signUp} />
      </Fragment>
    );
  }
}

export default withRouter(connect()(App));

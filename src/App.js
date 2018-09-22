import React, { Component,Fragment } from 'react';
import Firebase from "./component/firebase.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Firebase />
      </Fragment>
    );
  }
}

export default App;

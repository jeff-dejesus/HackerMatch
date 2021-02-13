import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Groups} from './Groups';
import {Home} from './Home';
import {Login} from './Login';
import {NoMatch} from './NoMatch';
import {Signup} from './Signup';
import {Users} from './Users';
import {Settings} from './Settings';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { userAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp( {

})

const auth = firebase.auth();
const firestore = firebase.firestore();

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/settings" component={Settings}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

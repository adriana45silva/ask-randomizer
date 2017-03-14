import AskComponent from 'javascripts/modules/ask-component.jsx';
import React from "react";
import ReactDOM from "react-dom";
import styles from 'assets/stylesheets/main.scss';
import { Provider } from 'react-redux';
import  store  from 'javascripts/store/store.js';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var app = document.querySelector('.app-main');
var routerHistory = syncHistoryWithStore(hashHistory, store)

  ReactDOM.render((
    <Provider store={store}>
      <Router history={routerHistory}>
        <Route path="/" component={AskComponent}>
        </Route>
      </Router>
    </Provider>
  ), app);





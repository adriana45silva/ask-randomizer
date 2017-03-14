// import * as actions from 'javascripts/actions/users';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import  askReducer  from 'javascripts/reducers/ask-reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let middlewares = [] ;
const userAppReducer = combineReducers({
   askReducer,
   routing: routerReducer
});

if ( !process.env.NODE_ENV ) {
  const createLogger = logger();
  middlewares.push(createLogger);
  let store = createStore(userAppReducer, applyMiddleware(...middlewares, thunk));  
}

let store = createStore(userAppReducer, applyMiddleware(...middlewares, thunk));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// simple dispatch to see if reducer is ok

// store.dispatch({
//   type: 'ADD_USER',
//   user: [
//     {
//       name: 'foo'
//     }
//   ]
// });

// store.dispatch({
//   type: 'REMOVE_USER',
//   userToRemove: 'foo'
// });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default store;
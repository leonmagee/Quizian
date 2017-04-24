import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import api from '../Utils/api';

/**
 * Sample Middleware
 * @param store
 */
// const logger = (store) => (next) => (action) => {
//     console.log('action fired:', action)
//     next(action)
// }

// const error = (store) => (next) => (action) => {
//     try {
//         next(action)
//     } catch(e) {
//         console.log('ERROR!!!!!', action, e)
//     }
// }

//const middleware = applyMiddleware(logger, error);
/**
 * Right now the middleware doesn't seem to do anything other than enable the logger
 * I'm not sure what thunk even does...
 * @type {GenericStoreEnhancer}
 */
const middleware = applyMiddleware(thunk, createLogger());

//const preloadedState = {currentQuestion: 0};
//const store = createStore(reducer, preloadedState);
// const store = createStore(reducer, {
//     currentQuestion: 0,
//     titleText: 'Hello World!',
// });

const store = createStore(reducer, {numberQuestions: 5}, middleware);

store.subscribe(() => {
    console.log('store has changed!', store.getState())
})

// store.dispatch((dispatch) => {
//     dispatch({type: 'TESTER_1'})
//     // async calls?
//     dispatch({type: 'TESTER_2'})
// })

module.exports = store;
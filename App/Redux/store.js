import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';

/**
 * Log Redux
 */
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(createLogger());

/**
 * Create store - set default number of questions
 */
const store = createStore(reducer, {numberQuestions: 2}, middleware);

module.exports = store;
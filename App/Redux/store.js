import {createStore} from 'redux';
import {reducer} from './reducers';

/**
 * Create store - set default number of questions
 */
const store = createStore(reducer, {numberQuestions: 2});

module.exports = store;
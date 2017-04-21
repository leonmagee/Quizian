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

store.dispatch((dispatch) => {
    dispatch({type: 'START_DATA'})





    //
    //
    //
    //
    // //api.getQuestions(this.state.numberQuestions).then((res) => {
    //     api.getQuestions(5).then((res) => {
    //
    //     /**
    //      * Shuffle Array
    //      * @param array
    //      * @returns {*}
    //      * @todo use this same function to randomize animation on main page
    //      */
    //     function shuffleArray(array) {
    //         for (var i = array.length - 1; i > 0; i--) {
    //             var j = Math.floor(Math.random() * (i + 1));
    //             var temp = array[i];
    //             array[i] = array[j];
    //             array[j] = temp;
    //         }
    //         return array;
    //     }
    //
    //     const questions = [];
    //     res.results.map((trivia_question) => {
    //         const answers = [];
    //         answers.push({answer: trivia_question.correct_answer, correct: true});
    //         trivia_question.incorrect_answers.map((incorrect_answer) => {
    //             answers.push({answer: incorrect_answer, correct: false});
    //         })
    //         /**
    //          * @todo I need to get the key of the correct answer ewre, not inside the render method..
    //          */
    //         questions.push({
    //             question: trivia_question.question,
    //             answers: shuffleArray(answers),
    //         });
    //     });

       // console.log('DATA RETRIEVAL WORKING????', questions);

        // this.setState({questions: questions});
        // this.setState({isLoading: false});

    //});













    // async calls?
    dispatch({type: 'DATA_AVAILABLE'})
})

module.exports = store;
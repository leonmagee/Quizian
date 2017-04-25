import React from 'react';

import {
    NEXT_QUESTION,
    START_NEW_QUIZ,
} from './actions';

    /**
     * Return current question index
     * @param state
     * @param action
     * @returns {*}
     */
export const currentQuestionReducer = (state = 0, action) => {

        switch (action.type) {
            case NEXT_QUESTION:
                return state + 1;
                break;
            case START_NEW_QUIZ:
                return 0
                break;
            default:
                return state;
        }
    };


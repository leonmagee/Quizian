import React from 'react';

import {
    RESET_QUIZ,
    //CORRECT_ANSWER,
} from './actions';

export const resetQuizReducer = (state, action) => {
    switch (action.type) {
        case RESET_QUIZ:
            return true;
            break;
        default:
            return false;
    }
}
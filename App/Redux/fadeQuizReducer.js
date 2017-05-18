/**
 * @todo not sure how to make Redux work with animations???
 */
import React from 'react';

import {
    FADE_IN_QUIZ,
    FADE_OUT_QUIZ,
} from './actions';

export const fadeQuizReducer = (state = 1, action) => {
    switch (action.type) {
        case FADE_IN_QUIZ:
            return 1
            break;
        case FADE_OUT_QUIZ:
            return 0;
            break;
        default:
            return state;
    }
}
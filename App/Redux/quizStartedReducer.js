import { START_QUIZ, START_QUIZ_CHOOSE, QUIZ_RESET } from './actions';

/**
 * quizStartedReducer
 * toggles quiz being started
 */
export const quizStartedReducer = (state = false, action) => {
  switch (action.type) {
    case START_QUIZ:
      return true;
    case START_QUIZ_CHOOSE:
      return true;
    case QUIZ_RESET:
      return false;
    default:
      return state;
  }
};

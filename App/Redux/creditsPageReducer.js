import { CREDITS_PAGE, STATS_PAGE, START_QUIZ, QUIZ_RESET } from './actions';

/**
 * statsPageReducer
 * toggles stats page
 */
export const creditsPageReducer = (state, action) => {
  switch (action.type) {
    case CREDITS_PAGE:
      return true;
    // case STATS_PAGE:
    //   return false;
    // case START_QUIZ:
    //   return false;
    // case QUIZ_RESET:
    //   return false;
    default:
      return false;
  }
};

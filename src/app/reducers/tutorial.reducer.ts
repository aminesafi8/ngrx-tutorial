import {Tutorial} from "../models/tutorial.model";
import * as TutorialActions from '../actions/tutorial.actions'
import {ADD_TUTORIAL, REMOVE_TUTORIAL} from '../actions/tutorial.actions'

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'https://www.google.tn'
}

export function tutorialReducer(state: Tutorial[] = [], action: TutorialActions.Actions) {
  switch (action.type) {
    case ADD_TUTORIAL:
      return [...state, action.payload];
    case REMOVE_TUTORIAL:
      state.splice(action.payload, 1); // TODO fix this
      return state;
    default:
      return state;

  }
}

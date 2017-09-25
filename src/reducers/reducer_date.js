import { FETCH_DATE } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_DATE:
      console.log(action);
    
      return [action.payload.data, ...state]; // never change state directly

    default:
      break;
  }
  return state;
}
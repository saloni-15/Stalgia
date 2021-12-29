//Reducer is a function which accepts state and action and returns the changed state.
import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      }; //action.payload are posts only
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case LIKE:
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...state, action.payload]; //previous state and new post
    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};

// const reducer = (state, action) => {
//     if(action.type == 'CREATE'){
//         ...some logic for returning state
//     }
// }

//Reducer is a function which accepts state and action and returns the changed state.

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;   //action.payload are posts only
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};

// const reducer = (state, action) => {
//     if(action.type == 'CREATE'){
//         ...some logic for returning state
//     }
// }

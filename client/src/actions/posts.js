import * as api from "../api";

// action creators-> functions that returns(dispatch) action
// action-> type + payload
// payload-> data to store all posts.

export const getPosts = () => async (dispatch) => {
  // const action = {type: 'FETCH_ALL', payload: []}
  // dispatch(action);
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

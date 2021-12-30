import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api";

// action creators-> functions that returns(dispatch) action
// action-> type + payload
// payload-> data to store all posts.

// const action = {type: 'FETCH_ALL', payload: []}
// dispatch(action);
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (err) {
    console.log(err);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

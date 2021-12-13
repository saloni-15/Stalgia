import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles.js";


const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>This is Posts section.</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

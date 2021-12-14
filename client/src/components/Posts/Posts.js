import React from "react";
import { useSelector } from "react-redux"; //to fetch data from global redux store 
import Post from "./Post/Post";
import useStyles from "./styles.js";


const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  
  return (
    <>
      <h1>This is Posts section.</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

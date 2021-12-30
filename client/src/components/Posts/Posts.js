import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux"; //to fetch data from global redux store
import Post from "./Post/Post";
import useStyles from "./styles.js";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts); //[] -> {posts:}
  const classes = useStyles();

  if (!posts.length && !isLoading) return "No posts";

  return (
    //if(no posts) then loading sign else grid of posts will show up
    isLoading ? (
      <CircularProgress color="secondary" />
    ) : (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;

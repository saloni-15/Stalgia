import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            //this button when clicked, send the post ID to the form component
            setCurrentId(post._id); //pass to Form and App
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <FavoriteIcon fontSize="small" />
          &nbsp;Like&nbsp;{post.likeCount}
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

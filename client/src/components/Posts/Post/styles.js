import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    "&:hover": {
      backgroundBlendMode: "lighten",
    },
  },

  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  title: {
    padding: "0 10px",
  },
  message: {
    padding: "0 0",
  },
  cardActions: {
    padding: "0 12px 6px 12px",
    display: "flex",
    justifyContent: "space-between",
  },
});

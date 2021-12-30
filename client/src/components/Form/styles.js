import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      height: "",
    },
  },
  paper: {
    padding: theme.spacing(1),
    //height: "300px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    //height: "100%",
  },
  fileInput: {
    width: "90%",
  },
  buttonSubmit: {
    marginBottom: 10,
    margin: theme.spacing(1),
  },
  buttonClear: {
    margin: theme.spacing(1),
  },
}));

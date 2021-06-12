import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  message: {
    width: 205,
  },
}));

const TimePickers = ({ value, handleMethods, message }) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <span className={classes.message}>{message}</span>
      <TextField
        id="time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        value={value}
        onChange={handleMethods}
      />
    </form>
  );
};

export default TimePickers;

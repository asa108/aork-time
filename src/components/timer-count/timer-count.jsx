import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const TimePickers = ({ value, handleMethods, message }) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <span>{message}</span>
      <TextField
        id="time"
        // label="what time did you get to work?"
        type="time"
        // defaultValue={defaultValue}
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

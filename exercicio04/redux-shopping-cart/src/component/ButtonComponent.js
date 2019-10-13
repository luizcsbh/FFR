import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
//Passar por parametro props para alterar o nome do botão
export function ButtonComponent() {
  const classes = useStyles();

  return (
    <div>
      <Button id="Add" variant="contained" className={classes.button}>
        Default
      </Button>
      <Button
        id="Details"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Primary
      </Button>
    </div>
  );
}

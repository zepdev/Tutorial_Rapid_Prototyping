import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.logo.indigo,
    textAlign: "center",
    padding: `${theme.spacing.component.l.rem}rem 0`
  },
  p: {
    color: theme.color.global.white
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <p className={clsx(classes.p, "zep-typo--normal-body1")}>
        &copy; Zeppelin
      </p>
    </footer>
  );
}

export default Footer;

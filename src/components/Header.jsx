import React from "react";
import { makeStyles } from "@material-ui/styles";
import logo from "../assets/logo.svg";
import Button from "@zlab-de/zel-react/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.component.l.rem}rem ${theme.spacing.component.xl.rem}rem`
  },
  img: {
    width: 200
  }
}));

function Header({ lang, handleSetLang }) {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img src={logo} alt="Zeppelin" className={classes.img}></img>
      <Button variant="primary" size="medium" onClick={handleSetLang}>
        {lang}
      </Button>
    </header>
  );
}

export default Header;

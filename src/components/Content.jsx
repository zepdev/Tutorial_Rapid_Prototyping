import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing.component.xl.rem}rem ${theme.spacing.component.xl.rem}rem`,
    textAlign: "center"
  }
}));

function Content() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <main className={classes.root}>
      <h1 className="zep-typo--normal-h1">{t("title")}</h1>
    </main>
  );
}

export default Content;

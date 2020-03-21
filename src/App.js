import React, { useState } from "react";
import "@zlab-de/zel-react/zel.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}));

function App() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const handleSetLang = () => {
    let language = lang === "en" ? "de" : "en";
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <div className={clsx(classes.root, "theme-indigo")}>
      <Header lang={lang} handleSetLang={handleSetLang} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

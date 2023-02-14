import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Menu from "./Menu";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

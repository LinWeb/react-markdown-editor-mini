import React from "react";
import ReactDom from "react-dom";
import config from "../script/example";
import "../assets/css/icon.css";
import "../assets/css/mark.scss";
// import Editor from "./Editor/index";
import Editor from "react-markdown-editor-mini";

ReactDom.render(<Editor {...config} />, document.getElementById("root"));

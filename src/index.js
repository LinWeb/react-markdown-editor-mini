import React from "react";
import ReactDom from "react-dom";
import config from "../script/example";
import "../assets/css/icon.css";
import "../assets/css/mark.scss";
import Editor from "./Editor/index";
// import Editor from "react-markdown-editor-mini";  // 开发时测试发布到npm并安装到本地的npm包是否可用
// import Editor from '../lib/index'   // 开发时测试构建后是否可以可用

// ReactDom.render(<Editor />, document.getElementById("root"));
ReactDom.render(<Editor {...config} />, document.getElementById("root"));

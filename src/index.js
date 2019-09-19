import React from "react";
import ReactDom from "react-dom";
import config from "../script/example";
import "../assets/css/icon.css";
import "../assets/css/mark.scss";

import Editor from "./Editor/indesx.tsx";
// import Editor from '../lib/index'

ReactDom.render(<Editor {...config} />, document.getElementById("root"));

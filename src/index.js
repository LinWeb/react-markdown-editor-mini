import React from "react";
import ReactDom from "react-dom";
import Editor from "./Editor/index.tsx";
import config from "../script/example";

ReactDom.render(<Editor {...config} />, document.getElementById("root"));

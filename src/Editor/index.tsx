import React from "react";
import Toolbar from "../Toolbar/index";
import EditTextarea from "../EditTextarea/index";
import Preview from "../Preview/index";
import "./index.scss";

interface Props {
  config: {
    row: number;
  };
}
interface State {
  config: {
    row: number;
  };
}
export default class Editor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      config: {
        row: 11
      }
    };
  }

  render() {
    return (
      <div className="react-markdown-editor-container">
        <div className="toolbar-container">
          <Toolbar />
        </div>
        <div className="main-container">
          <div className="edit-container">
            <EditTextarea />
          </div>
          <div className="view-container">
            <Preview />
          </div>
        </div>
      </div>
    );
  }
}

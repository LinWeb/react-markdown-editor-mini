import React from "react";
import Toolbar from "../Toolbar/index";
import EditTextarea from "../EditTextarea/index";
import Preview from "../Preview/index";
import "./index.scss";

interface Props {
  width: number;
  height: number;
  defaultValue: string;
}
interface State {
  value: string;
}
export default class Editor extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { value: props.defaultValue || "" };
  }
  public changeValue = (value: string) => {
    this.setState(() => {
      return {
        value
      };
    });
  };

  public render() {
    const { width, height } = this.props;
    const { value } = this.state;
    return (
      <div
        className="react-markdown-editor-container"
        style={{ width: width + "px" }}
      >
        <div className="toolbar-container">
          <Toolbar />
        </div>
        <div className="main-container" style={{ height: height - 32 + "px" }}>
          <div className="edit-container">
            <EditTextarea value={value} changeValue={this.changeValue} />
          </div>
          <div className="view-container">
            <Preview />
          </div>
        </div>
      </div>
    );
  }
}

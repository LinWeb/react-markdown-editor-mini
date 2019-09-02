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
  selectContent: string;
  selectStartIndex: number;
  selectEndIndex: number;
}
export default class Editor extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      value: props.defaultValue || "",
      selectContent: "",
      selectStartIndex: 0,
      selectEndIndex: 0
    };
  }

  public change = (newSelectContent: string) => {
    const {
      value,
      selectStartIndex,
      selectEndIndex,
    } = this.state;
    let start = value.substring(0, selectStartIndex);
    let end = value.substring(selectEndIndex);
    let newValue = start + newSelectContent + end
    this.changeValue(newValue)
  }
  public changeValue = (newValue: string) => {
    this.setState(() => {
      return {
        value: newValue
      };
    });
  };
  public getSelectContent = (selectContent: string) => {
    const selectStartIndex = this.state.value.indexOf(selectContent);
    const selectEndIndex = selectStartIndex + selectContent.length;
    this.setState(() => {
      return {
        selectStartIndex,
        selectEndIndex,
        selectContent
      };
    });
  };
  public render() {
    const { width, height } = this.props;
    const {
      value,
      selectStartIndex,
      selectEndIndex,
      selectContent
    } = this.state;
    console.log(selectStartIndex, selectEndIndex, selectContent);
    return (
      <div
        className="react-markdown-editor-container"
        style={{ width: width + "px" }}
      >
        <div className="toolbar-container">
          <Toolbar change={this.change} selectContent={selectContent} />
        </div>
        <div className="main-container" style={{ height: height - 32 + "px" }}>
          <div className="edit-container">
            <EditTextarea
              value={value}
              changeValue={this.changeValue}
              getSelectContent={this.getSelectContent}
            />
          </div>
          <div className="view-container">
            <Preview />
          </div>
        </div>
      </div>
    );
  }
}

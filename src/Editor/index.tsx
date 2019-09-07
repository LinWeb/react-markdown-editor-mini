import React from "react";
import Toolbar from "../Toolbar/index";
import Textarea from "../Textarea/index";
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
  scrollRatio: number;
}
export default class Editor extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      value: props.defaultValue || "",
      selectContent: "",
      selectStartIndex: 0,
      selectEndIndex: 0,
      scrollRatio: 0
    };
  }

  public changeSelectContent = (newSelectContent: string) => {
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
  }

  public getSelectContent = (selectStartIndex: number, selectEndIndex: number, selectContent: string) => {
    this.setState(() => {
      return {
        selectStartIndex,
        selectEndIndex,
        selectContent
      };
    });
  }

  public changeScrollRatio = (scrollRatio: number) => {
    this.setState(() => {
      return {
        scrollRatio
      };
    });
  }

  public render() {
    const { width, height } = this.props;
    const {
      value,
      selectContent,
      scrollRatio
    } = this.state;
    return (
      <div
        className="react-markdown-editor-container"
        style={{ width: width + "px" }}
      >
        <div className="toolbar-container">
          <Toolbar changeSelectContent={this.changeSelectContent} changeValue={this.changeValue} selectContent={selectContent} />
        </div>
        <div className="main-container" style={{ height: height - 32 + "px" }}>
          <div className="edit-container">
            <Textarea
              value={value}
              scrollRatio={scrollRatio}
              changeValue={this.changeValue}
              getSelectContent={this.getSelectContent}
              changeScrollRatio={this.changeScrollRatio}
            />
          </div>
          <div className="view-container">
            <Preview scrollRatio={scrollRatio} content={value} changeScrollRatio={this.changeScrollRatio} />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import Toolbar from "../component/Toolbar/index";
import Textarea from "../component/Textarea/index";
import Preview from "../component/Preview/index";
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
  historyValues: string[];
  historyIndex: number;
}
export default class Editor extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      value: props.defaultValue || "",
      selectContent: "",
      selectStartIndex: 0,
      selectEndIndex: 0,
      scrollRatio: 0,
      historyValues: [''],
      historyIndex: 0,
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

  public changeValue = (newValue: string, isHistory?: boolean) => {
    const { value, historyValues } = this.state
    if (value !== newValue) {
      this.setState(() => {
        return {
          value: newValue,
          historyValues: isHistory ? [...historyValues] : [newValue, ...historyValues]
        };
      });
    }
  }

  public history = (reduce: number) => {
    const { historyValues, historyIndex } = this.state
    const index = historyIndex - reduce
    const newValue = historyValues[index]
    this.setState(() => {
      return {
        historyIndex: index
      }
    })
    this.changeValue(newValue, true)
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
      scrollRatio,
      historyValues,
      historyIndex
    } = this.state;
    console.log(this.state.historyValues)
    return (
      <div
        className="react-markdown-editor-container"
        style={{ width: width + "px" }}
      >
        <div className="toolbar-container">
          <Toolbar
            changeSelectContent={this.changeSelectContent}
            changeValue={this.changeValue}
            selectContent={selectContent}
            history={this.history}
            historyLength={historyValues.length}
            historyIndex={historyIndex}
          />
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

import React from "react";
import Toolbar from "@src/component/Toolbar/index";
import Textarea from "@src/component/Textarea/index";
import Preview from "@src/component/Preview/index";
import InterfaceOperation from '@src/component/InterfaceOperation/index'
import "./index.scss";
import { MarkToHtml } from "@utils/index";

interface Props {
  width?: number;
  height?: number;
  defaultValue?: string;
  isFullScreen?: boolean;
  onChange?: (value: string, html: string) => void;
}


interface State {
  value: string;
  selectContent: string;
  selectStartIndex: number;
  selectEndIndex: number;
  scrollRatio: number;
  historyValues: string[];
  historyIndex: number;
  isFullScreen: boolean;
  interfaceStatus: number;
}

export default class Editor extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      value:
        props.defaultValue ||
        window.localStorage.getItem("REAT_MARKDOWN_VALUE") ||
        "",
      selectContent: "",
      selectStartIndex: 0,
      selectEndIndex: 0,
      scrollRatio: 0,
      historyValues: [props.defaultValue || ""],
      historyIndex: 0,
      isFullScreen: props.isFullScreen || false,
      interfaceStatus: 3
    };
  }

  public changeSelectContent = (newSelectContent: string) => {
    const { value, selectStartIndex, selectEndIndex } = this.state;
    let start = value.substring(0, selectStartIndex);
    let end = value.substring(selectEndIndex);
    let newValue = start + newSelectContent + end;
    this.changeValue(newValue);
  };

  public changeValue = (
    newValue: string,
    isHistory?: boolean,
    isInputChinese?: boolean
  ) => {
    const { value, historyValues } = this.state;
    if (value !== newValue || isInputChinese) {
      !isHistory && this.props.onChange(newValue, MarkToHtml(newValue || "")); // 回调函数返回输入域的值和生成对应的html
      this.setState(() => {
        return {
          value: newValue,
          historyValues: isHistory
            ? [...historyValues]
            : [newValue, ...historyValues]
        };
      });
    }
  };

  public history = (reduce: number) => {
    const { historyValues, historyIndex } = this.state;
    const index = historyIndex - reduce;
    const newValue = historyValues[index];
    this.setState(() => {
      return {
        historyIndex: index
      };
    });
    this.changeValue(newValue, true);
  };

  public getSelectContent = (
    selectStartIndex: number,
    selectEndIndex: number,
    selectContent: string
  ) => {
    this.setState(() => {
      return {
        selectStartIndex,
        selectEndIndex,
        selectContent
      };
    });
  };

  public changeScrollRatio = (scrollRatio: number) => {
    this.setState(() => {
      return {
        scrollRatio
      };
    });
  };

  public changeFullScreen = (isFullScreen: boolean) => {
    this.setState(() => {
      return {
        isFullScreen
      };
    });
  };

  public saveContent = () => {
    const { value } = this.state;
    window.localStorage.setItem("REAT_MARKDOWN_VALUE", value);
  };

  public clearContent = () => {
    this.changeValue("");
    window.localStorage.removeItem("REAT_MARKDOWN_VALUE");
  };

  public changeInterfaceStatus = (interfaceStatus: number) => {
    this.setState(() => {
      return {
        interfaceStatus
      };
    });
  }

  public render() {
    const { width = 614, height = 300 } = this.props;
    const {
      value,
      selectContent,
      scrollRatio,
      historyValues,
      historyIndex,
      isFullScreen,
      interfaceStatus
    } = this.state;
    return (
      <div
        className={
          "react-markdown-editor-container" +
          (isFullScreen ? " full-screen" : "")
        }
        style={{ width: width + "px" }}
      >
        <div className="toolbar-container">
          <Toolbar
            changeSelectContent={this.changeSelectContent}
            changeValue={this.changeValue}
            changeFullScreen={this.changeFullScreen}
            isFullScreen={isFullScreen}
            selectContent={selectContent}
            history={this.history}
            historyLength={historyValues.length}
            historyIndex={historyIndex}
            saveContent={this.saveContent}
            clearContent={this.clearContent}
          />
        </div>
        <div className={'main-container' + (interfaceStatus === 1 ? ' edit-mode' : interfaceStatus === 2 ? ' view-mode' : '')} style={{ height: height - 32 + "px" }}>
          <InterfaceOperation interfaceStatus={interfaceStatus} changeInterfaceStatus={this.changeInterfaceStatus} />
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
            <Preview
              scrollRatio={scrollRatio}
              content={value}
              changeScrollRatio={this.changeScrollRatio}
            />
          </div>
        </div>
      </div>
    );
  }
}

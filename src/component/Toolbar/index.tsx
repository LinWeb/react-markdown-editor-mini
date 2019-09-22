import React from "react";
import "./index.scss";
import {
  ComponentEditOperation,
  TitleEditOperation,
  TableEditOperation,
  UploadImgOperation
} from "../editOperation/index";
import { Edit } from "@utils/index";

interface Props {
  changeSelectContent: (value: string) => void;
  changeValue: (value: string) => void;
  changeFullScreen: (isFullScreen: boolean) => void;
  isFullScreen: boolean;
  selectContent: string;
  history: (reduce: number) => void;
  historyLength: number;
  historyIndex: number;
  saveContent: () => void;
  clearContent: () => void;
  uploadImgUrl?: string;
}

export default class Toolbar extends React.Component<Props> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public editHandle = (type: string, params?: any) => {
    let { changeSelectContent, selectContent } = this.props;
    const value = Edit(type, selectContent, params);
    changeSelectContent(value); // 如何返回新的内容
  };
  public changeFullScreen = () => {
    const { changeFullScreen, isFullScreen } = this.props;
    changeFullScreen(!isFullScreen);
  };
  render() {
    const {
      historyLength,
      historyIndex,
      isFullScreen,
      saveContent,
      clearContent,
      uploadImgUrl
    } = this.props;
    const canRevoke = historyIndex !== historyLength - 1;
    const canRedo = historyIndex !== 0;
    return (
      <div className="toolbar">
        <TitleEditOperation editHandle={this.editHandle} />

        <ComponentEditOperation editHandle={this.editHandle} />

        <TableEditOperation editHandle={this.editHandle} />
        <UploadImgOperation editHandle={this.editHandle} uploadImgUrl={uploadImgUrl} />
        <span
          className={(canRevoke ? "" : "disable ") + "iconfont iconchexiao"}
          title="撤销"
          onClick={() => {
            canRevoke && this.props.history(-1);
          }}
        />
        <span
          className={(canRedo ? "" : "disable ") + "iconfont iconzhongzuo"}
          title="重做"
          onClick={() => {
            canRedo && this.props.history(1);
          }}
        />
        <span
          className="iconfont iconshanchu"
          title="清空"
          onClick={() => {
            clearContent()
          }}
        />
        <span className="iconfont iconbaocun" title="保存" onClick={() => {
          saveContent()
        }} />
        <span
          className={
            "iconfont fullScreen " +
            (isFullScreen ? "icontuichuquanping" : "iconquanping")
          }
          title={isFullScreen ? "退出全屏" : "全屏"}
          onClick={this.changeFullScreen}
        />
      </div>
    );
  }
}

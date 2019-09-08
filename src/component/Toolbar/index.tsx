import React from "react";
import "./index.scss";
import { ComponentEditOperation, TitleEditOperation, TableEditOperation } from "../editOperation/index"
import { edit } from "../../../utils/edit";

interface Props {
  changeSelectContent: (value: string) => void;
  changeValue: (value: string) => void;
  changeFullScreen: (isFullScreen: boolean) => void;
  isFullScreen: boolean;
  selectContent: string;
  history: (reduce: number) => void;
  historyLength: number;
  historyIndex: number;
}


export default class Toolbar extends React.Component<Props> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public editHandle = (type: string) => {
    let { changeSelectContent, selectContent } = this.props;
    const value = edit(type, selectContent);
    changeSelectContent(value); // 如何返回新的内容
  };
  public changeFullScreen = () => {
    const { changeFullScreen, isFullScreen } = this.props
    changeFullScreen(!isFullScreen)
  }
  render() {
    const { changeValue, historyLength, historyIndex, isFullScreen } = this.props
    const canRevoke = historyIndex !== historyLength - 1
    const canRedo = historyIndex !== 0
    return (
      <div className="toolbar">

        <TitleEditOperation editHandle={this.editHandle} />

        <ComponentEditOperation editHandle={this.editHandle} />

        <TableEditOperation editHandle={this.editHandle} />

        <span className="iconfont iconshangchuantupian" title='上传图片' />
        <span className={(canRevoke ? '' : 'disable ') + "iconfont iconchexiao"} title='撤销' onClick={() => {
          canRevoke && this.props.history(-1)
        }} />
        <span className={(canRedo ? '' : 'disable ') + "iconfont iconzhongzuo"} title='重做' onClick={() => {
          canRedo && this.props.history(1)
        }} />
        <span className="iconfont iconshanchu" title='清空' onClick={() => {
          changeValue('');
        }} />
        <span
          className="iconfont iconbaocun"
          title='保存'
        />
        <span
          className={"iconfont fullScreen " + (isFullScreen ? 'icontuichuquanping' : 'iconquanping')}
          title={(isFullScreen ? '退出全屏' : '全屏')}
          onClick={this.changeFullScreen}
        />
      </div>
    );
  }
}

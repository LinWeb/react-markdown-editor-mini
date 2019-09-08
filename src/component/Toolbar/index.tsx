import React from "react";
import "./index.scss";
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
  public click = (type: string) => {
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
        <span className="iconfont iconbiaotizhengwenqiehuan title-operate" title='标题'>
          <ul className="title-types">
            <li
              className="h1"
              onClick={() => {
                this.click("H1");
              }}
            >
              H1
            </li>
            <li
              className="h2"
              onClick={() => {
                this.click("H2");
              }}
            >
              H2
            </li>
            <li
              className="h3"
              onClick={() => {
                this.click("H3");
              }}
            >
              H3
            </li>
            <li
              className="h4"
              onClick={() => {
                this.click("H4");
              }}
            >
              H4
            </li>
            <li
              className="h5"
              onClick={() => {
                this.click("H5");
              }}
            >
              H5
            </li>
            <li
              className="h6"
              onClick={() => {
                this.click("H6");
              }}
            >
              H6
            </li>
          </ul>
        </span>
        <span
          className="iconfont iconcuti"
          title='粗体'
          onClick={() => {
            this.click("bold");
          }}
        />
        <span
          className="iconfont iconxieti"
          title='斜体'
          onClick={() => {
            this.click("ltalics");
          }}
        />
        <span
          className="iconfont iconxiahuaxian"
          title='下划线'
          onClick={() => {
            this.click("underline");
          }}
        />
        <span
          className="iconfont iconeditor-strikethrough"
          title='删除线'
          onClick={() => {
            this.click("strikethrough");
          }}
        />
        <span
          className="iconfont iconwuxuliebiao"
          title='无序列表'
          onClick={() => {
            this.click("unorder");
          }}
        />
        <span
          className="iconfont iconyouxuliebiao"
          title='有序列表'
          onClick={() => {
            this.click("order");
          }}
        />
        <span
          className="iconfont iconyinyong"
          title='引用'
          onClick={() => {
            this.click("quote");
          }}
        />
        <span
          className="iconfont iconfengexian"
          title='分割线'
          onClick={() => {
            this.click("splitLine");
          }}
        />
        <span
          className="iconfont iconchaolianjie"
          title='超链接'
          onClick={() => {
            this.click("link");
          }}
        />
        <span
          className="iconfont iconbiaoge"
          title='表格'
          onClick={() => {
            this.click("table");
          }}
        />
        <span
          className="iconfont icondaima"
          style={{ fontSize: '21px' }}
          title='代码'
          onClick={() => {
            this.click("code");
          }}
        />
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

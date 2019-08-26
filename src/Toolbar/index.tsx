import React from "react";
import "./index.scss";

interface Props {
  changeValue: (value: string) => void;
}
export default class Toolbar extends React.Component<Props> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public selectTitle = () => {
    this.props.changeValue("11111111"); // 如何返回新的内容
  };
  render() {
    return (
      <div className="toolbar">
        <span
          className="iconfont iconbiaotizhengwenqiehuan"
          onClick={this.selectTitle}
        />
        <span className="iconfont iconcuti" />
        <span className="iconfont iconxieti" />
        <span className="iconfont iconxiahuaxian" />
        <span className="iconfont iconeditor-strikethrough" />
        <span className="iconfont iconwuxuliebiao" />
        <span className="iconfont iconyouxuliebiao" />
        <span className="iconfont iconyinyong" />
        <span className="iconfont iconfengexian" />
        <span className="iconfont iconchaolianjie" />
        <span className="iconfont iconshangchuantupian" />
        <span className="iconfont iconchexiao" />
        <span className="iconfont iconzhongzuo" />
        <span className="iconfont iconshanchu" />
      </div>
    );
  }
}

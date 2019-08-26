import React from "react";
import "./index.scss";

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="toolbar">
        <span className="iconfont iconbiaotizhengwenqiehuan" />
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

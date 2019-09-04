import React from "react";
import "./index.scss";
import { edit } from "../../utils/edit";

interface Props {
  change: (value: string) => void;
  selectContent: string;
}
export default class Toolbar extends React.Component<Props> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public click = (type: string) => {
    let { change, selectContent } = this.props;
    const value = edit(type, selectContent);
    change(value); // 如何返回新的内容
  };
  render() {
    return (
      <div className="toolbar">
        <span className="iconfont iconbiaotizhengwenqiehuan title-operate">
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
          onClick={() => {
            this.click("bold");
          }}
        />
        <span
          className="iconfont iconxieti"
          onClick={() => {
            this.click("ltalics");
          }}
        />
        <span
          className="iconfont iconxiahuaxian"
          onClick={() => {
            this.click("underline");
          }}
        />
        <span
          className="iconfont iconeditor-strikethrough"
          onClick={() => {
            this.click("strikethrough");
          }}
        />
        <span
          className="iconfont iconwuxuliebiao"
          onClick={() => {
            this.click("unorder");
          }}
        />
        <span
          className="iconfont iconyouxuliebiao"
          onClick={() => {
            this.click("order");
          }}
        />
        <span
          className="iconfont iconyinyong"
          onClick={() => {
            this.click("quote");
          }}
        />
        <span
          className="iconfont iconfengexian"
          onClick={() => {
            this.click("splitLine");
          }}
        />
        <span
          className="iconfont iconchaolianjie"
          onClick={() => {
            this.click("link");
          }}
        />
        <span className="iconfont iconshangchuantupian" />
        <span className="iconfont iconchexiao" />
        <span className="iconfont iconzhongzuo" />
        <span className="iconfont iconshanchu" />
      </div>
    );
  }
}

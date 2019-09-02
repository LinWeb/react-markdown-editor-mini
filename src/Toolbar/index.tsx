import React from "react";
import "./index.scss";
import { edit } from '../../lib/filter'

interface Props {
  change: (value: string) => void;
  selectContent: string;
}
export default class Toolbar extends React.Component<Props> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public click = (type: string) => {
    let { change, selectContent } = this.props
    const value = edit(type, selectContent)
    change(value); // 如何返回新的内容
  };
  render() {
    return (
      <div className="toolbar">
        <span
          className="iconfont iconbiaotizhengwenqiehuan title-operate"
        >
          <ul className='title-types'>
            <li className='h1' onClick={() => { this.click('H1') }}>
              H1
            </li>
            <li className='h2' onClick={() => { this.click('H2') }}>
              H2
            </li>
            <li className='h3' onClick={() => { this.click('H3') }}>
              H3
            </li>
            <li className='h4' onClick={() => { this.click('H4') }}>
              H4
            </li>
            <li className='h5' onClick={() => { this.click('H5') }}>
              H5
            </li>
            <li className='h6' onClick={() => { this.click('H6') }}>
              H6
            </li>
          </ul>

        </span>
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

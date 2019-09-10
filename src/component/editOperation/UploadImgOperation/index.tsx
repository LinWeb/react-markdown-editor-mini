import React, { Fragment } from "react";
import minImg from "../../../../utils/minImg";
import Ajax from "../../../../utils/ajax";
interface IProps {
  editHandle: (type: string) => void;
}

export default class UploadImgOperation extends React.Component<IProps, {}> {
  public constructor(props: Readonly<IProps>) {
    super(props);
  }

  public onChange = (e: any) => {
    let $file = e.target; // 获取上传标签节点
    minImg($file.files, url => {
      Ajax({
        url: "/detail?id=000",
        method: "GET"
      });
    });
  };

  public render() {
    let { editHandle } = this.props;
    return (
      <Fragment>
        <label
          htmlFor="upload-img"
          className="iconfont iconshangchuantupian"
          title="上传图片"
        />
        <input
          type="file"
          id="upload-img"
          style={{ display: "none" }}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}

import React, { Fragment } from "react";
import { MinImg, Ajax } from "../../../../utils/index";
interface IProps {
  editHandle: (type: string) => void;
}

export default class UploadImgOperation extends React.Component<IProps, {}> {
  public constructor(props: Readonly<IProps>) {
    super(props);
  }

  public onChange = (e: any) => {
    let $file = e.target; // 获取上传标签节点
    MinImg($file.files, data => {
      Ajax({
        url: "/upload",
        method: "POST",
        data: {
          name: "lxs",
          age: 90
        },
        headers: {
          "Content-Type": "multipart/form-data"
        },
        error: (xhr: any) => {
          console.log(xhr);
        }
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

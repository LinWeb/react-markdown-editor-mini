import React, { Fragment } from "react";
import { MinImg, Ajax } from "@utils/index";
interface IProps {
  editHandle: (type: string, params?: any) => void;
}

export default class UploadImgOperation extends React.Component<IProps, {}> {
  public constructor(props: Readonly<IProps>) {
    super(props);
  }

  public onChange = async (e: any) => {
    let $file = e.target; // 获取上传标签节点
    for (let i = 0; i < $file.files.length; i++) {
      let file = await MinImg($file.files[i])
      await this.upload(file)
    }
  };

  public async upload(file: any) {
    let { editHandle } = this.props;
    Ajax({
      url: "/upload",
      method: "POST",
      data: file,
      headers: {
        "Content-Type": "multipart/form-data; charset=UTF-8"
      },
      error: (err: any) => {
        editHandle('upload_img', { url: 'https://avatars0.githubusercontent.com/u/21263805', tip: '注：示例图片，仅展示' })
        throw Error(err)
      },
      success: (data: any) => {
        editHandle('upload_img', { url: data })
      }
    });
  }

  public render() {
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

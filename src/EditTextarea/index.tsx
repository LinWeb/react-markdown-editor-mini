import React from "react";
import "./index.scss";

interface Props {
  value: string;
  changeValue: (value: string) => void;
  getSelectContent: (value: string) => void;
}
export default class EditTextarea extends React.Component<Props, {}> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public onChange = (e: any) => {
    const value = e.target.value;
    this.props.changeValue(value);
  };
  public onMouseUp = () => {
    let str = window.getSelection().toString();
    this.props.getSelectContent(str);
  };
  public render() {
    const { value } = this.props;
    return (
      <textarea
        className="edit-textarea"
        value={value}
        onChange={this.onChange}
        onMouseUp={this.onMouseUp}
      />
    );
  }
}

import React from "react";
import "./index.scss";

interface Props {
  value: string;
  changeValue: (value: string) => void;
  getSelectContent: (selectStartIndex: number, selectEndIndex: number, selectContent: string) => void;
}
export default class Textarea extends React.Component<Props, {}> {
  public constructor(props: Readonly<Props>) {
    super(props);
  }
  public onChange = (e: any) => {
    const value = e.target.value;
    this.props.changeValue(value);
  };
  public onMouseUp = (e: any) => {
    const selectStartIndex = e.target.selectionStart
    const selectEndIndex = e.target.selectionEnd
    let selectContent = window.getSelection().toString();
    this.props.getSelectContent(selectStartIndex, selectEndIndex, selectContent);
  };
  public render() {
    const { value } = this.props;
    return (
      <textarea
        className="edit-textarea"
        value={value}
        onChange={this.onChange}
        onMouseUp={this.onMouseUp}
      ></textarea>
    );
  }
}

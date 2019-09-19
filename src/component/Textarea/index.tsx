import React from "react";
import "./index.scss";

interface IProps {
  value: string;
  scrollRatio: number;
  changeValue: (value: string, isHistory?: boolean, isInputChinese?: boolean) => void;
  getSelectContent: (selectStartIndex: number, selectEndIndex: number, selectContent: string) => void;
  changeScrollRatio: (scrollRatio: number) => void;
}

interface IState {
  isInputChinese: boolean;
}

export default class Textarea extends React.Component<IProps, IState> {
  private $textarea: any;

  public constructor(props: Readonly<IProps>) {
    super(props);
    this.$textarea = React.createRef()
    this.state = {
      isInputChinese: false
    }
  }

  public onChange = (e: any) => {
    const value = e.target.value;
    const { isInputChinese } = this.state
    this.props.changeValue(value, isInputChinese);
  };

  public onCompositionStart = () => {
    this.setState({ isInputChinese: true })
  }

  public onCompositionEnd = (e: any) => {
    const value = e.target.value;
    this.props.changeValue(value, false, true);
    this.setState({ isInputChinese: false })
  }

  public onMouseUp = (e: any) => {
    const selectStartIndex = e.target.selectionStart
    const selectEndIndex = e.target.selectionEnd
    let selectContent = window.getSelection().toString();
    this.props.getSelectContent(selectStartIndex, selectEndIndex, selectContent);
  };

  public onScroll = (e: any) => {
    const { changeScrollRatio } = this.props
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const clientHeight = e.target.clientHeight
    const scrollRatio = scrollTop / (scrollHeight - clientHeight)
    changeScrollRatio(scrollRatio)
  }

  public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    const { scrollRatio } = nextProps
    const scrollHeight = this.$textarea.current.scrollHeight
    const clientHeight = this.$textarea.current.clientHeight
    // this.$textarea.current.scrollTop = (scrollHeight - clientHeight) * scrollRatio
    return true
  }

  public render() {
    const { value } = this.props;
    return (
      <textarea
        className="edit-textarea"
        value={value}
        ref={this.$textarea}
        onChange={this.onChange}
        onCompositionStart={this.onCompositionStart}
        onCompositionEnd={this.onCompositionEnd}
        onMouseUp={this.onMouseUp}
        onScroll={this.onScroll}
      ></textarea>
    );
  }
}

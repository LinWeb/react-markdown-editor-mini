import React from "react";
import marked from '../../utils/marked'
import './index.scss'

interface IProps {
  content: string;
  scrollRatio: number;
  changeScrollRatio: (scrollRatio: number) => void;
}

export default class Preview extends React.Component<IProps, {}> {
  private $preview: any;

  public constructor(props: Readonly<IProps>) {
    super(props)
    this.$preview = React.createRef();
  }

  public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    const { content, scrollRatio } = nextProps
    const scrollHeight = this.$preview.current.scrollHeight
    const clientHeight = this.$preview.current.clientHeight
    // this.$preview.current.scrollTop = (scrollHeight - clientHeight) * scrollRatio
    this.$preview.current.scrollTop = scrollRatio
    if (content === this.props.content) {
      return false;
    }
    return true
  }

  public onScroll = (e: any) => {
    const { changeScrollRatio } = this.props
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const clientHeight = e.target.clientHeight
    const scrollRatio = scrollTop / (scrollHeight - clientHeight)
    changeScrollRatio(scrollTop)
  }

  public render() {
    const { content, } = this.props
    return <div className="preview"
      ref={this.$preview}
      onScroll={this.onScroll}
      dangerouslySetInnerHTML={{ __html: marked(content || '') }}
    ></div>;
  }
}

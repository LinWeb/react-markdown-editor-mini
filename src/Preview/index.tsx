import React from "react";
import marked from '../../utils/marked'

interface IProps {
  content: string;
}

export default class Preview extends React.Component<IProps, {}> {
  render() {
    const { content } = this.props
    return <div className="preview" dangerouslySetInnerHTML={{ __html: marked(content || '') }}></div>;
  }
}

import React from "react";
import './index.scss'

interface IProps {
    editHandle: (type: string) => void;
}

export default class TableEditOperation extends React.Component<IProps, {}> {
    public constructor(props: Readonly<IProps>) {
        super(props)
    }

    public render() {
        let { editHandle } = this.props;
        return <span
            className="iconfont iconbiaoge table"
            title="表格"
            onClick={() => {

            }}
        >
        </span>;
    }
}

import React from "react";
import './index.scss'

interface IProps {
    editHandle: (type: string) => void;
}

interface IState {
    hoverKey: number
}

export default class TableEditOperation extends React.Component<IProps, IState> {
    public constructor(props: Readonly<IProps>) {
        super(props)
        this.state = {
            hoverKey: -1
        }
    }

    onMouseEnter(key: number) {
        this.setState(() => {
            return {
                hoverKey: key
            }
        })
    }
    public render() {
        let { editHandle } = this.props;
        let { hoverKey } = this.state;
        return <span
            className="iconfont iconbiaoge"
            title="表格"
            onClick={() => {

            }}
        >
            <ul className='table'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((item, key) =>
                    <li key={String(key)} className={'td ' + (key < hoverKey ? 'hover' : '')} onMouseEnter={() => { this.onMouseEnter(item) }}></li>
                )}
            </ul>
        </span>;
    }
}

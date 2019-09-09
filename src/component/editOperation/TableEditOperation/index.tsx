import React from "react";
import './index.scss'

interface IProps {
    editHandle: (type: string, params: any) => void;
}

interface IState {
    currentSite: number[],
    row: number;
    column: number;
}

export default class TableEditOperation extends React.Component<IProps, IState> {
    public constructor(props: Readonly<IProps>) {
        super(props)
        this.state = {
            currentSite: [-1, -1],
            row: 4,
            column: 6
        }
    }

    public onMouseEnter([x, y]: number[]) {
        this.setState(() => {
            return {
                currentSite: [x, y]
            }
        })
    }

    public getClass([x, y]: number[]): string {
        const { currentSite, } = this.state;
        const [currentX, currentY] = currentSite
        return x <= currentX && y <= currentY ? 'hover' : ''

    }
    public render() {
        let { editHandle } = this.props;
        const { row, column } = this.state
        let arr = []
        for (let i = 1; i <= row; i++) {
            for (let j = 1; j <= column; j++) {
                let a = [i]
                a.push(j)
                arr.push(a)
            }
        }
        return <span
            className="iconfont iconbiaoge"
            title="表格"
        >
            <ul className='table'>
                {arr.map((item, key) =>
                    <li key={String(key)}
                        className={'td ' + this.getClass(item)}
                        onMouseEnter={() => { this.onMouseEnter(item) }}
                        onClick={() => {
                            editHandle('table', item);
                        }}
                    >
                    </li>
                )}
            </ul>
        </span>;
    }
}

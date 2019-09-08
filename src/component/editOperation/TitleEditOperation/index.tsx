import React, { Fragment } from "react";

interface IProps {
    editHandle: (type: string) => void;
}

export default class TitleEditOperation extends React.Component<IProps, {}> {
    public constructor(props: Readonly<IProps>) {
        super(props)
    }

    public render() {
        let { editHandle } = this.props;
        return <Fragment>
            <span className="iconfont iconbiaotizhengwenqiehuan title-operate" title='标题'>
                <ul className="title-types">
                    {[1, 2, 3, 4, 5, 6].map((item) =>
                        <li
                            key={item}
                            className={`h${item}`}
                            onClick={() => {
                                editHandle(`H${item}`);
                            }}
                        >
                            {`H${item}`}
                        </li>
                    )}
                </ul>
            </span>
        </Fragment >;
    }
}

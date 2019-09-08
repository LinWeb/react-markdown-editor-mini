import React, { Fragment } from "react";

interface IProps {
    editHandle: (type: string) => void;
}

export default class ComponentEditOperation extends React.Component<IProps, {}> {

    private commonEditConfig = [
        {
            key: 'bold',
            title: '粗体',
            icon: 'iconcuti'
        },
        {
            key: 'ltalics',
            title: '斜体',
            icon: 'iconxieti'
        },
        {
            key: 'underline',
            title: '下划线',
            icon: 'iconxiahuaxian'
        }, {
            key: 'strikethrough',
            title: '删除线',
            icon: 'iconeditor-strikethrough'
        }, {
            key: 'unorder',
            title: '无序列表',
            icon: 'iconwuxuliebiao'
        }, {
            key: 'order',
            title: '有序列表',
            icon: 'iconyouxuliebiao'
        }, {
            key: 'quote',
            title: '引用',
            icon: 'iconyinyong'
        },
        {
            key: 'splitLine',
            title: '分割线',
            icon: 'iconfengexian'
        },
        {
            key: 'link',
            title: '超链接',
            icon: 'iconchaolianjie'
        },
        {
            key: 'code',
            title: '代码',
            icon: 'icondaima'
        },
    ]

    public constructor(props: Readonly<IProps>) {
        super(props)
    }

    public render() {
        let { editHandle } = this.props;
        return <Fragment>
            {this.commonEditConfig.map(item => (
                <span
                    key={item.key}
                    className={'iconfont ' + item.icon}
                    title={item.title}
                    onClick={() => {
                        editHandle(item.key)
                    }}
                ></span>
            ))}
        </Fragment>;
    }
}

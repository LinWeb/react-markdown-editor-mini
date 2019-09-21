import React from 'react'

interface Props {
    interfaceStatus: number;
    changeInterfaceStatus: (interfaceStatus: number) => void;
}

export default class InterfaceOperation extends React.Component<Props, {}> {
    public render() {
        const { changeInterfaceStatus } = this.props
        return (
            <div className='interface-operation'>
                <span className='iconfont iconbianji edit' title='编辑' onClick={() => {
                    changeInterfaceStatus(1)
                }}></span>
                <span className='iconfont iconyulan view' title='预览' onClick={() => {
                    changeInterfaceStatus(2)
                }}></span>
                <span className='iconfont iconcolumns edit-view' title='编辑并预览' onClick={() => {
                    changeInterfaceStatus(3)
                }}></span>
            </div>
        )
    }
}
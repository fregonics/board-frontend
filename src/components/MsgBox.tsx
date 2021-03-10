import React from 'react'
import './style.css'

type Props = {
    content: string;
    createdAt: Date;
}

const MsgBox: React.FC<Props> = (props) => {
    return (
        <div className="msgbox">
            <div className="msgbox-content">
                {props.content}
            </div>
            <div className="msgbox-createdat">
                {props.createdAt.toString()}
            </div>
        </div>
    )
}

export default MsgBox
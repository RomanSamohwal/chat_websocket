import React from 'react';
import s from "./Message.module.css";

const Messages = (props) => {
    return <div className={s.wrapper}>
        <div className={s.cloud}>
            <div className={s.cloud}>
                <div className={s.name}>{props.name}</div>
                {props.text}{props.children}
            </div>
        </div>
    </div>
}

export default Messages;
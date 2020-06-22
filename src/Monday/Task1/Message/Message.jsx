import React from 'react';
import s from "./Message.module.css";
import image from './images.jfif'

const Message = () => {
    return <div className={s.wrapper}>
        <div className={s.cloud}>
            <div className={s.cloud}>
                <div className={s.name}>Самохвал Роман Сергеевич</div>
                <div className={s.before}></div>
                <div className={s.after}></div>
                ####################################################################################
                <div className={s.time}>
                    13.04.2020
                </div>
            </div>

        </div>
    </div>
}

export default Message;
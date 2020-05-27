import React from 'react';
import s from "./Cloud.module.css";

const Cloud = (props) => {
    return <div className={s.wrapper}>
        <div className={s.cloud}>
            <div className={s.cloud}>
                <div className={s.after}></div>
                <div className={s.time}>
                    <div> create: {props.task.create}</div>
                    <div> update: {props.task.updated}</div>
                    <div> finished: {props.task.finished}</div>
                </div>

            </div>

        </div>
    </div>
}

export default Cloud;
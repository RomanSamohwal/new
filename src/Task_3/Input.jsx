import React from 'react';
import s from "./Input.module.css";

class Input extends React.Component {



    render = () => {
        return <div className={s.input_box}>
            <input className={s.input} ref={this.props.reference} type={"text"}
                   placeholder={"enter your name"}/></div>
    }
}

export default Input;
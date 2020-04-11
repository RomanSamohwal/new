import React from 'react';
import s from "./Input.module.css";

class Input extends React.Component {

    render = () => {
        debugger;
        let error = this.props.error ? `${s.input + " " + s.error}`: `${s.input}`;

        return <div className={s.input_box}>
            <input className = {error}  type={"text"}
                   placeholder={"enter your name"} onChange={this.props.changedError}
                   onKeyPress={this.props.onKeyPress} value={this.props.state.name}
            />

        </div>
    }
}

export default Input;
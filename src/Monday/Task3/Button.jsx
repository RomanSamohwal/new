import React from 'react';
import s from "./Counter.module.css";
import Input from "./Input";
import Butt from "./Butt";


class Counter extends React.Component {

    render = () => {
        return <div className={s.counter_box}>
            <Input error ={this.props.error}
                   changedError = {this.props.changedError} onKeyPress = {this.props.onKeyPress} state = {this.props.state} />
            <Butt onAddClick = {this.props.onAddClick} state = {this.props.state} />
        </div>
    }
}

export default Counter;
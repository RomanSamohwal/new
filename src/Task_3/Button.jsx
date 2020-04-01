import React from 'react';
import s from "./Counter.module.css";
import Input from "./Input";
import Butt from "./Butt";


class Counter extends React.Component {


   /* onAddClick = () => {
        let newName = this.reference.current.value;
        let newCount = this.props.state.count + 1;
        this.props.changed(newCount, newName);
        alert("Hello " + newName);
        this.reference.current.value = "";
        this.reference.current.focus();
    };
    reference = React.createRef();*/

    render = () => {
        return <div className={s.counter_box}>
            <Input reference={this.props.reference}/>
            <Butt onAddClick = {this.props.onAddClick} state = {this.props.state}/>
        </div>
    }
}

export default Counter;
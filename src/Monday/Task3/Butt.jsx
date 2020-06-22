import React from 'react';
import s from "./Button.module.css";
import Span from "./Span";


class Butt extends React.Component {

    render = () => {
        return <div className={s.box_button}>
            <Span state = {this.props.state}/>
            <button className={s.button} onClick={this.props.onAddClick}>Press the button</button>
        </div>
    }
}

export default Butt;
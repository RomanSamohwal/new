import React from 'react';
import s from "./Input.module.css";

class Span extends React.Component {



    render = () => {
        return <div><span>{this.props.state.count}</span></div>
    }
}

export default Span;
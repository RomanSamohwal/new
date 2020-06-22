import React from 'react';
import s from './InputName.module.css'


class InputNames extends React.Component {
    render = () => {
       let newNames = this.props.name.map((name)=><div className={s.names}>{name}</div>);
        return <div>{newNames}</div>
    }
}

export default InputNames;
import React from 'react';



class InputNames extends React.Component {
    render = () => {
       let newNames = this.props.name.map((name)=><div>{name}</div>);
        return <div>{newNames}</div>
    }
}

export default InputNames;
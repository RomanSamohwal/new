import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from "./Task_1/Name/Name";
import Quality from "./Task_2/Quality";
import Message from "./Task_1/Message/Message";
import Counter from "./Task_3/Button";
import InputNames from "./Task_4/InputNames";

class App extends React.Component {
    state = {
        count: 0,
        name: []
    };
    reference = React.createRef();

    onAddClick = () => {
        let newName = this.reference.current.value;
        let newCount = this.state.count + 1;
        this.changed(newCount, newName);
        alert("Hello " + newName);
        this.reference.current.value = "";
        this.reference.current.focus();
    };


    changed = (newCount, newName)=>{
        let newArr = [...this.state.name, newName];
        this.setState({
            count: newCount,
            name: newArr
        });
    };


    render = () => {
        return (
            <div className={"App"}>
                <Name/>
                <Message/>
                <Quality/>
                <Counter state={this.state} onAddClick = {this.onAddClick} reference = {this.reference} />
                <InputNames name={this.state.name}/>
            </div>
        );
    }
}

export default App;

import React from 'react';

import s from "./Monday.module.css"
import Name from "./Task_1/Name/Name";
import Quality from "./Task_2/Quality";
import Message from "./Task_1/Message/Message";
import Counter from "./Task_3/Button";
import InputNames from "./Task_4/InputNames";

class Monday extends React.Component {
    state = {
        count: 0,
        nameArray: [],
        error: false,
        name: ""
    };
    reference = React.createRef();


    onAddClick = () => {
        let newName = this.state.name;
        this.setState({name: ""});

        if (newName === "") {//проверяем если пустакя строка тогда рамка input подсвечивается красным
            this.setState({error: true})
        } else {
            let newCount = this.state.count + 1;
            this.changed(newCount, newName);
            alert("Hello " + newName);
        }

    };


    changed = (newCount, newName) => {
        let newArr = [...this.state.nameArray, newName];
        this.setState({
            count: newCount,
            nameArray: newArr,
        });
    };

//что бы пропала красная граница нужно добавить обработчик события onChange в input и в нём сетать ошибку в false
    changedError = (e) => {
        debugger;
        this.setState(
            {error: false,
                   name: e.currentTarget.value})//
    };

//функцию пробрасываем в input в атрибут onKeyPress. Срабатывает при нажатии Enter
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddClick();
        }
    };

    render = () => {
        return (
            <div className={s.Monday}>
                <Name/>
                <Message/>
                <Quality/>
                <Counter state={this.state} onAddClick={this.onAddClick} error={this.state.error}
                         changedError={this.changedError} onKeyPress={this.onKeyPress}/>
                <InputNames name={this.state.nameArray}/>
            </div>
        );
    }
}

export default Monday;

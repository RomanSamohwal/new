import React from 'react';
import './ToDoList';


class TodoListHeader extends React.Component {

    state = {
        error: false,
        title: ""
    };

    newTaskTitleRef = React.createRef();
    onAddTaskClick = (e) => {
        let newText =this.state.title;
        this.setState({title:""});
        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addTask(newText)
        }

    };

    onTitleChanged = (e) => {
        this.setState({error: false});

        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }
    };

    render = () => {
        let errorColor = this.state.error ? "error" : "";

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onChange={this.onTitleChanged}
                           type="text" placeholder="New task name"
                           ref={this.newTaskTitleRef} className={errorColor}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;


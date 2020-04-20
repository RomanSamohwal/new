import React from 'react';
import './ToDoList';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    }

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode= () => {
        this.setState({editMode: false});
    }

    deleteTask =()=>{
        let id = this.props.task.id;
        this.props.deleteTask(id)
    };
    render = () => {

        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={containerCssClass}>
                {/* кнопка для удаления*/}
                <button onClick={this.deleteTask}>delete</button>

                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                { this.state.editMode
                    ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true} value={this.props.task.title} />
                    : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                }, priority: {this.props.task.priority}
            </div>
        );
    }
}

export default TodoListTask;

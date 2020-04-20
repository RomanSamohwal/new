import React from 'react';
import './ToDoList';

class TodoListTask extends React.Component {

    state = {
        editMode: false
    };
    activatedActiveMode = () => {
        this.setState({editMode: true})
    };
    deActivatedActiveMode = () => {
        this.setState({editMode: false})
    };
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    render = () => {
        let taskIsDoneClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={taskIsDoneClass}>

                <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                <span>{this.props.task.id} : </span>
                {this.state.editMode ?
                    <input onChange={this.onTitleChanged} value={this.props.task.title} autoFocus={true}
                           onBlur={this.deActivatedActiveMode}/> :
                    <span onClick={this.activatedActiveMode}>{this.props.task.title}  </span>

                }
                priority: {this.props.task.priority}
            </div>
        );
    }
}

export default TodoListTask;


import React from 'react';
import './ToDoList';
import Cloud from "../Cloud";

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        flag: false
    };


    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };


    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
    };

    deleteTask = () => {
        let id = this.props.task.id;
        this.props.deleteTask(id)
    };
    onChangeFlag=()=>{
        this.setState({flag : true})

    };

    offChangeFlag=()=>{
        this.setState({flag : false})

    };

    handleChange=(event)=> {
        debugger
        /*this.setState({value: event.target.value});*/
        this.props.changePriority(this.props.task.id, event.target.value)
    }

    render = () => {

        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
             <div onMouseOut={this.offChangeFlag}>
                <div className={containerCssClass} onMouseOver={this.onChangeFlag}>
                    {/* кнопка для удаления*/}
                    <button onClick={this.deleteTask}>delete</button>

                    <input type="checkbox" checked={this.props.task.isDone}
                           onChange={this.onIsDoneChanged}/>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                                 value={this.props.task.title}/>
                        : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                    }, priority:
                    <form >
                        <label>
                            <select value ={this.props.priority}  onChange={this.handleChange}>
                                <option value="low">low</option>
                                <option value="medium">medium</option>
                                <option value="high">high</option>
                            </select>
                        </label>
                    </form>
                </div>{this.state.flag? <div  className="cloudList"><Cloud task ={this.props.task}/></div> : ""}
             </div>
        );
    }
}

export default TodoListTask;

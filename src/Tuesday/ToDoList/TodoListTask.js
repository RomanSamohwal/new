import React from 'react';
import './ToDoList';
import Cloud from "../Cloud";

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        low: true,
        medium: false,
        high: false,
        flag: false
    };

    componentDidMount() {
        debugger;
        switch (this.props.task.priority) {
            case "medium":
                this.setState({
                    low: false,
                    medium: true,
                    high: false
                });
                break;
            case "high":
                this.setState({
                    low: false,
                    medium: false,
                    high: true
                });
                break;
            default :
                this.setState({
                    low: true,
                    medium: false,
                    high: false
                })
        }
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    changePriorityLow = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            low: true,
            medium: false,
            high: false
        });
        this.props.changePriority(this.props.task.id, "low")
    };
    changePriorityMedium = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            low: false,
            medium: true,
            high: false
        });
        this.props.changePriority(this.props.task.id, "medium")
    };
    changePriorityHigh = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            low: false,
            medium: false,
            high: true
        });
        this.props.changePriority(this.props.task.id, "high")
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
                    }, priority: <div>low <input type="checkbox" checked={this.state.low}
                                                 onChange={this.changePriorityLow}/>
                    medium <input type="checkbox" checked={this.state.medium} onChange={this.changePriorityMedium}/>
                    high <input type="checkbox" checked={this.state.high} onChange={this.changePriorityHigh}/></div>
                </div>{this.state.flag? <div  className="cloudList"><Cloud task ={this.props.task}/></div> : ""}
             </div>
        );
    }
}

export default TodoListTask;

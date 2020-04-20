import React from 'react';
import './ToDoList';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {restore, save} from "../../storage";





class ToDoList extends React.Component {



    constructor(props) {
        super(props);
    }

     nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All"
    };

    componentDidMount() {
       this.restoreState();
    }

    saveState = ()=>{
        save(this.state)
    };

    restoreState = () => {
        let state1 = restore(this.state);
        this.setState(state1,() => {
            this.state.tasks.forEach((task) => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1;
                }
            })
        })
    };


    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj}
            }

        });

        this.setState({
            tasks: newTasks
        }, this.saveState);
    };

    changeStatus = (task, isDone) => {
       this.changeTask(task,{isDone: isDone})
    };


    changeTitle = (taskId, title) => {
        this.changeTask(taskId,{title: title})
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };

        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks,
        },  this.saveState);

    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue},this.saveState)
    };

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus} changeTitle={this.changeTitle} tasks={this.state.tasks.filter(t => {
                        switch (this.state.filterValue) {
                            case "All":
                                return true;
                            case "Completed":
                                return t.isDone;
                            case "Active":
                                return !t.isDone;
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default ToDoList;


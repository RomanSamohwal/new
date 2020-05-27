import React from 'react';
import './ToDoList.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {restore, save} from "../../storage";

class ToDoList extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        //вызываем метод save из storage.js
        save("our-state", this.state);
    };
    restoreState = () => {
        let stateAsString = restore("our-state");
        this.setState(stateAsString, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1;
                }
            })
        });
    };

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All",
        flag: false
    };
    setDate = () => {
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        let fullTime = `${day}:${month}:${year}  ${hour}:${minute}:${second}`;
        return fullTime;
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low",
            create: this.setDate(),
            updated: "",
            finished: ""
        };
        // инкрементим (увеличим) id следующей таски, чтобы при следюущем добавлении, он был на 1 больше
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });

    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState();
        });
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id != taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });

        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    }


    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone,
                                      finished: this.setDate()});
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title,
                                      updated: this.setDate()});
    }

    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority});
    };

    deleteTask = (id) => {
        let newTask = this.state.tasks.filter(i => {
            if (i.id === id) {
                return false
            } else return true
        });
        this.setState({tasks: newTask}, () => {
            this.saveState();
        })
    };

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTask}
                        changePriority={this.changePriority}
                        tasks={this.state.tasks.filter(t => {
                            if (this.state.filterValue === "All") {
                                return true;
                            }
                            if (this.state.filterValue === "Active") {
                                return t.isDone === false;
                            }
                            if (this.state.filterValue === "Completed") {
                                return t.isDone === true;
                            }
                        })
                        }/></div>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>

        );
    }
}

export default ToDoList;




import React, { Component } from 'react'
import Task from './Task';
import AddTask from './AddTask';
import firebase from '../config/firebase'

export default class Tasks extends Component {
    constructor (){
        super();
        this.state = {
            taskedit: {id: "", name:"", category: "" },
            tasks: [],
            db: firebase.firestore()
        }
    }

    componentDidMount = () => {
        this.refresh();
    }

    refresh = () => {
        let tasks = []
        this.state.db.collection("tasks").get().then( querySnapshot =>
            {
                querySnapshot.forEach( doc =>
                    {
                        console.log(doc.data())
                        tasks.push(doc.data())
                    }
                )
                this.setState({
                    tasks,
                    taskedit: {id: "", name:"", category: "" }
                })
            }
        )
    }

    renderTasks = () =>  {
        let taskList =  this.state.tasks.map( task=> <Task key={task.id} task={task} handleDelTask={this.delTask} handleEditTask={this.editTask} /> );
        return taskList;
    }

    addTask = (task) => {
        //console.log(task)
        // let tasks = this.state.tasks;
        // if(task.id===""){
        //     task.id = Math.floor(Math.random()*9999)
        //     tasks.push(task)
        // }else{
        //     let index = tasks.findIndex( (taskitem) => taskitem.id === task.id);
        //     tasks[index] = task;
        // }

        // this.setState({
        //     taskedit: {id: "", name:"", category: "" },
        //     tasks: tasks
        // })
        if(task.id==="")
             task.id = Math.floor(Math.random()*9999)+""
        this.state.db.collection("tasks").doc(task.id).set(task)
        this.refresh()

    }

    delTask = (task) => {
        //console.log(task)
        // let index = this.state.tasks.findIndex((taskitem) => task.id === taskitem.id )
        // console.log(index)
        // let tasks = this.state.tasks;
        // tasks.splice(index,1)
        // this.setState({
        //     tasks: tasks
        // })
        this.state.db.collection("tasks").doc(task.id).delete()
        this.refresh()
    }

    editTask = (task) => {
        console.log(task)
        this.setState( {
            taskedit: task
        })
    }



    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTasks()}    
                    </tbody>
                </table> 
                <AddTask handleNewTask={this.addTask} task={this.state.taskedit} />
            </div>
        )
    }
}
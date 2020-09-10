import React, { Component } from 'react'

export default class AddTask extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            category: "", 
            id: ""
        }
    }
    static getDerivedStateFromProps = (nextProps, prevState) => {

        console.log(nextProps);
        if(nextProps.task.id !== prevState.id ){
            return {
                name: nextProps.task.name,
                category: nextProps.task.category, 
                id: nextProps.task.id               
            }
        } else
            return null 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.refs.name.value)
        let task = {
            id: this.state.id,
            name: this.state.name, 
            category: this.state.category 
        }
        this.props.handleNewTask(task);
    }
    handleChange = (event) => {
        //console.log(event.target);
        this.setState({[event.target.id]: event.target.value});
    }    

    render() {
        let accion  = (this.state.id==="")?"Agregar":"Guardar"
        return (
            <div>
                <h3> Agregar Tarea </h3>
                <form onSubmit={ this.handleSubmit } >
                    <input type="hidden" id="id" ref="id" value={this.state.id}/>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input className="form-control" type="text" id="name" ref="name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div  className="form-group">
                        <label>Categoria</label>
                        <input className="form-control" type="text" ref="category" id="category" onChange={this.handleChange} value={this.state.category} />
                    </div>
                    <input type="submit" value={accion} className="btn btn-primary " />
                </form>
            </div>
        )
    }
}

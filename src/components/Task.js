import React, { Component } from "react";

export default class Task extends Component {
  delTask = () => {
    this.props.handleDelTask(this.props.task);
  };

  editTask = () => {
    this.props.handleEditTask(this.props.task);
  };

  render() {
    let task = this.props.task;
    return (
      <tr>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>{task.category}</td>
        <td>
          <button className="btn btn-primary" onClick={this.editTask}>Editar</button>
          <button className="btn btn-danger ml-3" onClick={this.delTask}>Borrar</button>
        </td>
      </tr>
    );
  }
}

import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { name, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item ">
        <h6>{name}</h6>
        <button className="btn btn-primary" onClick={handleEdit}>
          Complete
        </button>

        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}

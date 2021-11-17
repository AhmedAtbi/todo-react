import React, { Component } from "react";

export default class AddTask extends Component {
  render() {
    const { item, handleAdd, handleChange } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleAdd}>
          <div className="input-group">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

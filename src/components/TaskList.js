import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TaskList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">
          Let's get some work done
        </h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              name={item.name}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-primary btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

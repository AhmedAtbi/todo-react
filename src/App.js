import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      editItem: false,
      items: [
        {
          id: uuid(),
          name: "React",
          etat: false,
        },
        {
          id: uuid(),
          name: "React-Router",
          etat: false,
        },
        {
          id: uuid(),
          name: "React-Redux",
          etat: false,
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id);

    console.log(selectedItem);

    this.setState({
      item: selectedItem.name,
      editItem: true,
      id: id,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,

      name: this.state.item,
    };
    console.log(newItem.id);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      id: uuid(),
      items: updatedItems,
      item: "",
      etat: false,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-right">To-Do App!</h3>
              <AddTask
                item={this.state.item}
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                editItem={this.state.editItem}
              />
              <TaskList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

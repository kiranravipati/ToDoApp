import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDos extends Component {
    createToDoItems() {
        return this.props.todos.map((todo) => { return <ToDoItem title={todo} callback={this.props.callback} />});
    }

    render() {
        return <div>
                 { this.createToDoItems() }
               </div>
    }
}

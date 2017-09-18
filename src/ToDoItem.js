import React, {Component} from "react";

export default class ToDoItem extends Component {
    constructor() {
        super();
        this.state = { completed: false };
    }

    toggleCompleteness() {
        if (this.state.completed)
            this.setState({ completed: false });
        else
            this.setState({ completed: true });
    }

    removeItem() {
        this.props.callback(this.props.title);
    }

    render() {
        return  <div>
                    {this.state.completed ? <s>{this.props.title}</s> : <span>{this.props.title}</span> }
                    <button onClick = {() => this.removeItem()}>X</button>
                    <button onClick = {() => this.toggleCompleteness()} >{this.state.completed ? "Incomplete" : "Complete"}</button>
                </div>
    }
}


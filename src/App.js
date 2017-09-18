import React, {Component} from "react";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";
import './App.css';

export default class App extends Component {
    constructor() {
       super();
       this.state = {todos: ['Learn React', 'Learn Angular JS']};
       this.addToDoItem = this.addToDoItem.bind(this);
       this.removeToDoItem = this.removeToDoItem.bind(this);
    }

    addToDoItem(item) {
        this.setState({todos: this.state.todos.concat(item)})
    }

    removeToDoItem(item) {
        this.setState({todos: this.state.todos.filter(e => e !== item)})
    }

    render() {
        return <div className="App">
                <h1>TO DO</h1>
                <AddToDo callback={this.addToDoItem}/>
                <ToDos todos={this.state.todos} callback={this.removeToDoItem} />
               </div>
    }
}
import React, {Component} from "react";

export default class AddToDo extends Component  {
    updateToDo(event) {
        const value = this.refs.itemText.value;
        this.props.callback(value);
        this.refs.itemText.value = "";
    }

    render() {
        return  <div>
                    <input ref="itemText" type="text"/>
                    <button onClick={() => this.updateToDo()}>Add</button>
                </div>
    }
}
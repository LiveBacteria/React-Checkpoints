import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.isCompleted} onChange={ this.props.toggleComplete } />
                <button onClick={ this.props.deleteTodo }>Delete</button>
                <span>{this.props.description}</span>
            </li>
        );
    }
}
export default ToDo;
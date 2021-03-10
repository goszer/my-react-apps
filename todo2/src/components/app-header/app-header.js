import { Component } from 'react';
import './app-header.css';

export default class AppHeader extends Component {

    state = {
        toDo: 0,
        done: 0
    }

    render() {
        const { title } = this.props;

        return (
            <div className="app-header d-flex">
                <h1>Todo List</h1>
                <h2>{title}</h2>
            </div>
        );
    }
};
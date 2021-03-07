import { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

import './app.css'
import {render} from "@testing-library/react";

export default class App extends Component {

    state = {
        todoData: [
            {text: 'Learn react', imporant: true, done: false, id: 1},
            {text: 'Build amazing app', imporant: false, done: false, id: 2},
            {text: 'Drink coffee', imporant: false, done: true, id: 3}
        ]
    };

    onAddNew = (newText) => {
        const res = [
            {text: "New Todo", imporant: false, done: false, id: 100},
            ...this.state.todoData
        ]

        this.setState({todoData: res});
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader/>
                <SearchPanel onAddNew={this.onAddNew}/>
                <TodoList list={this.state.todoData}/>
            </div>
        );
    }
}
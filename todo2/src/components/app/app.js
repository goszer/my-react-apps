import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    myTodos = [
        this.createTodo('Drink Coffee'),
        this.createTodo('Make Awesome App'),
        this.createTodo('Have a lunch')
    ];

    getTitle = (list) => {
        let totalCount = list.length;
        let doneCount = list.filter((el) => el.done).length;
        return (totalCount - doneCount) + ' more to do, ' + doneCount + ' done';
    }

    state = {
        todoData: this.myTodos,
        title : this.getTitle(this.myTodos),
        filterText: '',
        statusFilter: 'All'
    };

    createTodo(label) {
        return {
            label,
            important: false,
            done: false,
            visible: true,
            id: nanoid(10)
        };
    }

    filterList = (list, filterText, statusFilter) => {
        return list.map((el) => {
            let visibleByStatus = false;
            switch(statusFilter) {
                case 'All':
                    visibleByStatus = true;
                    break;
                case 'Active':
                    visibleByStatus = !el.done;
                    break;
                case 'Done':
                    visibleByStatus = el.done;
                    break;
            }
            let visibleByText = el.label.toUpperCase().includes(filterText.toUpperCase()) ;
            let isVisible = visibleByStatus && visibleByText;
            return {...el, ['visible']: isVisible };
        });
    };

    onAdded = (label) => {
        this.setState(({ todoData }) => {
            const todo = this.createTodo(label);
            let res = [...todoData, todo];
            res = this.filterList(res, this.state.filterText, this.state.statusFilter);
            return {
                todoData: res,
                title: this.getTitle(res),
                filterText: this.state.filterText,
                statusFilter: this.state.statusFilter
            }
        });
    };

    onDeleted = (id) => {
        this.setState(({ todoData }) => {
            const res = todoData.filter((el) => el.id !== id);
            return {
                todoData: res,
                title: this.getTitle(res),
                filterText: this.state.filterText,
                statusFilter: this.state.statusFilter
            };

        });
    };

    toggleProperty(arr, prop, id) {
        return arr.map((el) => {
            if (el.id !== id) {
                return el;
            }

            return {...el, [prop]: !el[prop] };
        });
    }

    toggleImportant = (id) => {
        this.setState(({ todoData }) => {
            let res = this.toggleProperty(todoData, 'important', id);
            return {
                todoData: res,
                title: this.getTitle(res),
                filterText: this.state.filterText,
                statusFilter: this.state.statusFilter
            }
        });
    };

    toggleDone = (id) => {
        this.setState(({ todoData }) => {
            let res = this.toggleProperty(todoData, 'done', id);
            res = this.filterList(res, this.state.filterText, this.state.statusFilter);
            return {
                todoData: res,
                title: this.getTitle(res),
                filterText: this.state.filterText,
                statusFilter: this.state.statusFilter
            }
        });
    };

    onTextFilter = (filterText) => {
        this.setState(({ todoData }) => {
            let res = this.filterList(todoData, filterText, this.state.statusFilter);

            return {
                todoData: res,
                title: this.state.title,
                filterText: filterText,
                statusFilter: this.state.statusFilter
            };
        });
    }

    onStatusFilter = (selected) => {
        this.setState(({ todoData }) => {
            let res = this.filterList(todoData, this.state.filterText, selected);

            return {
                todoData: res,
                title: this.state.title,
                filterText: this.state.filterText,
                statusFilter: selected
            }
        });
    }

    render() {
        const { todoData, title } = this.state;

        return (
            <div className="todo-app">
                <AppHeader title={title} />
                <div className="top-panel d-flex">
                    <SearchPanel onFilter={this.onTextFilter}  />
                    <ItemStatusFilter onFilter={this.onStatusFilter} />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.onDeleted}
                    toggleImportant={this.toggleImportant}
                    toggleDone={this.toggleDone} />

                <ItemAddForm onItemAdd={this.onAdded} />
            </div>
        );
    }
}

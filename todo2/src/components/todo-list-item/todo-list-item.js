import { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {
            important,
            label,
            done,
            visible,
            onDeleted,
            toggleImportant,
            toggleDone } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
            textDecoration: done ? 'line-through': null
        };

        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={toggleDone}>
                    {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={toggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}

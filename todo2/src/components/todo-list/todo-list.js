import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, toggleDone, toggleImportant }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        if (item.visible) {
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        {...itemProps}
                        onDeleted={() => onDeleted(id)}
                        toggleImportant={() => toggleImportant(id)}
                        toggleDone={() => toggleDone(id)}/>
                </li>
            );
        } else {
            return '';
        }
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;

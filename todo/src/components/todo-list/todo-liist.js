import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = (props) => {
    const items = props.list.map((todo) => {
        return (
            <li key={todo.id}>
                <TodoListItem text={todo.text}
                          important={todo.imporant}
                          done={todo.done}/>
            </li>
        );
    });

    return (
        <ul>
            {items}
        </ul>
    );
}

export default TodoList;
const TodoListItem = (props) => {
    let done = props.done;

    const itemStyle = {
        color: props.important ? 'tomato' : 'steelblue',
        textDecoration: props.done ? 'line-through' : null
    };



    const onLabelClick = () => {
        this.setScale();
        //done = true;
    }

    return (
        <span onClick={onLabelClick} style={itemStyle}>{props.text}</span>
    );
};

export default TodoListItem;

const SearchPanel = ({onAddNew}) => {
    const text = 'type here to search';
    return (
        <div>
            <input placeholder={text} className="search active"/>
            <button onClick={onAddNew}>Add new</button>
        </div>
    );
}

export default SearchPanel;
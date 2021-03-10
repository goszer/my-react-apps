import { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        const { onFilter } = this.props;
        const filterText = e.target.value;

        this.setState({
            label: filterText
        });

        onFilter(filterText);
    };

    render() {
        return (
            <input type="search"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={this.onLabelChange}
                   value={this.state.label}/>
        );
    }
};


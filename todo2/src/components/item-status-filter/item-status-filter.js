import { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    state = {
        selected : 'All'
    }

    onClick = (selected) => {
        const { onFilter } = this.props;

        this.setState({
            label: selected
        });

        onFilter(selected);
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-info"
                        onClick={() => this.onClick('All')}>All</button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.onClick('Active')}>Active</button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.onClick('Done')}>Done</button>
            </div>
        );
    }
};
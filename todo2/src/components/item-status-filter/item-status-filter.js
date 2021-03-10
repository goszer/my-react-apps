import { Component } from 'react';
import './item-status-filter.css';
import classNames from 'classnames';


export default class ItemStatusFilter extends Component {

    buttons = [ 'All', 'Active', 'Done' ]

    state = {
        selected : 'All'
    }

    onClick = (btnName) => {
        const {btnName: bName} = btnName;
        const { onFilter } = this.props;

        this.setState({
            selected: bName
        });

        onFilter(bName);
    }

    getCn = (btnName) => {
        const {btnName: bName} = btnName;
        let isSelected = (bName == this.state.selected);
        return classNames('btn', {'btn-info' : isSelected, 'btn-outline-secondary': !isSelected});
    }

    addButton = (btnName) => {
        let res = (
            <button type="button"
                    name={btnName}
                    className={this.getCn({btnName})}
                    onClick={() => this.onClick({btnName})}>{btnName}</button>
        );
        return res;
    }

    render() {
        return (
            <div className="btn-group">
                { this.buttons && this.buttons.map((el) => ( this.addButton(el) )) }
            </div>
        );
    }
};
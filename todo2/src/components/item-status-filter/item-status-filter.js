import { Component } from 'react';
import './item-status-filter.css';
import classNames from 'classnames';


export default class ItemStatusFilter extends Component {

    state = {
        selected : 'All'
    }

    onClick = (selected) => {
        const {btnName: sel} = selected;
        const { onFilter } = this.props;

        this.setState({
            selected: sel
        });

        onFilter(sel);
    }

    getCn = (btnName) => {
        const {btnName: bName} = btnName;
        let isSelected = (bName == this.state.selected);
        let cn = classNames('btn', {'btn-info' : isSelected, 'btn-outline-secondary': !isSelected});
        console.log(cn);
        return cn;
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
                {this.addButton('All')}
                {this.addButton('Active')}
                {this.addButton('Done')}
            </div>
        );
    }
};
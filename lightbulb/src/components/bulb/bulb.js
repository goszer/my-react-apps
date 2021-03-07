import { Component } from 'react';
import './bulb.css'
import classNames from 'classnames/bind';


export default class Bulb extends Component {
    state = {
        on: false
    }

    onClickTheSwitch = () => {
        this.setState((state) => {
            return { on: !state.on}
        });
    }

    render() {
        const {on: onValue} = this.state;
        const cn = classNames('bulb', { 'on' : onValue, 'off': !onValue});

        return <button className={cn} onClick={this.onClickTheSwitch}>I'm a lightbulb</button>
    }
}
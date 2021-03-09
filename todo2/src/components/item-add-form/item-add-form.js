import { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { label } = this.state;
    if (label.length === 0) {
      return;
    }

    const { onItemAdd } = this.props;
    onItemAdd(this.state.label);
    this.setState({ label: ''} );
  };

  render() {
    return (
      <form
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}>
        <input
          className="form-control"
          placeholder="type to add"
          onChange={this.onLabelChange}
          value={this.state.label} />
        <button
          className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}
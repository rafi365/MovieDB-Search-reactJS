import React from 'react';

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.searchboxhandler(event.target.value);
  }

  handleSubmit(event) {
    this.props.submitform();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>MovieDB Search</h1>
        <label>
          <input type="text" value={this.props.searchval} onChange={this.handleChange} placeholder='Search'/>
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Searchbox;

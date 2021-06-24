import React from 'react';

class ArrangeBooks extends React.Component {
  state = {
    value: this.props.shelf
  };
  changeHandler = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onUpdate(this.props.book, value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.changeHandler}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ArrangeBooks;
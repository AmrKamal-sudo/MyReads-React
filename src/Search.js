import React from 'react';

class Search extends React.Component {
  state = {
    value: ''
  };

  
  changeHandler = event => {
    const val = event.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };


  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={this.changeHandler}
          autoFocus
        />
      </div>
    );
  }
}

export default Search;

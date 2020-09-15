import React from "react";
import "./BookForm.css";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
    };
  }

  onSearch = (value) => {
    console.log(value);
    this.setState({
      searchVal: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getBooks(this.state.searchVal);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="Search">Search:</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter keyword"
          value={this.state.searchVal}
          onChange={(e) => this.onSearch(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default BookForm;

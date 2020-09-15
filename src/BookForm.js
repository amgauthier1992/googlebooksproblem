import React from "react";
import "./BookForm.css";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
      // title: "",
      // imageUrl: "",
      // author: "",
      // price: "",
      // description: "",
    };
  }

  onSearch = (value) => {
    console.log(value);
    this.setState = {
      searchVal: value,
    };
  };

  // onUpdateImageUrl = (imageUrl) => {
  //   this.setState = {
  //     imageUrl,
  //   };
  // };

  // onAuthorUpdate = (author) => {
  //   this.setState = {
  //     author,
  //   };
  // };

  // onPriceUpdate = (price) => {
  //   this.setState = {
  //     price,
  //   };
  // };

  // onDescriptionUpdate = (description) => {
  //   this.setState = {
  //     description,
  //   };
  // };

  render() {
    return (
      <form className="search-form">
        <label htmlFor="Search">Search:</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter author/volume"
          value={this.state.searchVal}
          onChange={(e) => this.onSearch(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default BookForm;

import React from "react";
import BookItem from "./BookItem";

class BookItemList extends React.Component {
  render() {
    const bookItems = this.props.bookItems.map((bookItem, i) => (
      <BookItem {...bookItem} key={i} />
    ));
    return <div className="BookItemList">{bookItems}</div>;
  }
}

BookItem.defaultProps = {
  bookItems: [],
};

export default BookItemList;

//... gives us entire object with key names as props, passes down stuff
//that we may not necessarily need. but it gives us access to everything.

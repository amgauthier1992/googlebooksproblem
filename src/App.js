import React from "react";
import "./App.css";
import BookForm from "./BookForm";
import BookItemList from "./BookItemList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      // searchQ: null,
    };
  }

  componentDidMount() {
    const baseUrl =
      "https://www.googleapis.com/books/v1/volumes" + "?q=" + "Poe";
    const queryUrl = "https://cors-anywhere.herokuapp.com/" + baseUrl;
    const apiKey = "AIzaSyAUu09FLBtOvGI3IbYcE3oZubfZKbHO3Ws";
    const options = {
      method: "GET",
      dataType: "json",
      headers: {
        key: `${apiKey}`,
        "x-requested-with": "xhr",
      },
    };

    fetch(queryUrl, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error has occured");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          books: data.items,
          error: null,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <BookForm bookItems={this.state.items} />
        <BookItemList bookItems={this.state.books} />
      </div>
    );
  }
}

export default App;

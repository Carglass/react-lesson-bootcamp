import React, { Component } from "react";
import api from "./../../utils/API";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    api.getBooks().then(response => {
      // console.log(response.data);
      this.setState({ books: response.data });
    });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Synopsis</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.map(value => (
            <tr key={value.title}>
              <td>Title: {value.title}</td>
              <td>Author: {value.author}</td>
              <td>Synopsis: {value.synopsis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Books;

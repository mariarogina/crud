import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import NotesList from "./components/NotesList";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };

    this.dataURL = "http://localhost:7777/notes";
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    axios
      .get(this.dataURL)
      .then((response) => this.setState({ notes: response.data }));
  };

  handleAdd = (note) => {
    axios.post(this.dataURL, note).then(() => this.loadData());
  };

  handleRemove = (id) => {
    axios.delete(`${this.dataURL}/${id}`).then(() => this.loadData());
  };


  render() {
    return (
      <div className="App">
      <Header loadData={this.loadData}/>
        <NotesList notes={this.state.notes} handleRemove={this.handleRemove} />
        <AddForm handleAdd={this.handleAdd}  />
      </div>
    );
  }
}

export default App;

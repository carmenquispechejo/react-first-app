import React from "react";
import './App.css';
import SearchBox from "../src/Components/SearchBox";
import ResultList from "../src/Components/ResultList";
//import { render } from "react-dom";

class App extends React.Component{

  constructor() {
    super()
    this.states = {
      data: [],
      value: ""
    }

  }







  render() {
    return(
      <div className="App">
        <h1> Guayerd - MELI </h1>
          <h2>Una nueva manera de encontrar </h2>
          <SearchBox result = {this.result}></SearchBox>
          <ResultList resultSearched = {this.state.date}></ResultList>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./styles.css";
import { ProductComponent } from "./component/ProductComponent";

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazing redux store</h1>
        </header>
        <ProductComponent />
      </div>
    );
  }
}

export default App;

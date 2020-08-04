import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { Icon } from "semantic-ui-react";
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {" "}
        App <SearchBar onSubmit={this.onSearchSubmit} />
        <Icon name="home"></Icon>
      </div>
    );
  }
}

export default App;

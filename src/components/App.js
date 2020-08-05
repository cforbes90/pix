import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import { Icon } from "semantic-ui-react";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {" "}
        App <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
        <Icon name="home"></Icon>
      </div>
    );
  }
}

export default App;

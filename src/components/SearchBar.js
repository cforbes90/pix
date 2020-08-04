import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //You have to put the onFormSubmit as an arrow function or else you will get a ton of erros because th
  //this keyword is not bound and becomes unknown. Arrow functions already bind the 'this'
  onFormSubmit = (event) => {
    //This is how you get the form to not submit on its own when you press enter
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    //console.log(this.state.term);
  };
  //   onInputChange(event) {
  //     console.log(event.target.value); //This is the only thing we care about.
  //   }
  //   onInputClick() {
  //     console.log("This was clicked");
  //   }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              //onChange={this.onInputChange}
              //onClick={this.onInputClick}
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

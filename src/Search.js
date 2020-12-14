import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <section className="form__holder">
          <form>
                <label className="sr-only" htmlFor="todo">Movies</label>
                <input type="text" value={searchValue} onChange={handleSearchInputChanges} placeholder="Search For Movies Here..." name="movies" id="movies" />
                <button id="submit-btn" type="submit" value="event.target.value" onClick={callSearchFunction}>Submit</button>
            </form>
    
      </section>
      
    );
}

export default Search;

























/*import React from 'react';
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        this.setState({
            submit: this.state.input
        });
    }
    render() {
        return(
            <section className="form__holder">
            <form>
                <label className="sr-only" htmlFor="todo">Movies</label>
                <input type="text" value="event.target.value" onChange={this.handleInput} placeholder="Search For Movies Here..." name="movies" id="movies" />
                <button id="submit-btn" type="submit" value="event.target.value" onSubmit={this.handleSubmit}>Submit</button>
            </form>
        </section>
        );
    }
}
export default Search;*/
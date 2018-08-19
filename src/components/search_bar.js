// import React, and React.Component, which
// pull off React.Component and assign it to a variable called Component
// This line is equivaluent to the following two lines:
/* import React, React.component from 'react';
   const Component = React.Component */
import React, { Component } from 'react';

// functional component. Very basic, but can't report or intropsect
// on what the user typed inside the input box. Thus, we 
// do class based components. 
// const SearchBar = () => {
//   return <input />;
// };

// class component. Used for some sort of internal record keeping about its state.
// abili ty to be more aware. 
class SearchBar extends Component {
  constructor(props) {
    // Component has it's own constructor method.
    // We call the parent's constructor method, by calling super(props);
    super(props);

    this.state = { term: '' };
  } 

  render() {
    // added an evetHandler, which watches for change when an input occurs.
    return (
      <div className="search-bar">
      <input 
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    // equivalent to this.setState({term: term})
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
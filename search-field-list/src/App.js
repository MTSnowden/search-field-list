import React, {Component} from "react";
// import PropTypes from "prop-types";
import TitleList from "./components/TitleList";
import SearchBoxContainer from "./containers/SearchContainer";

class App extends Component {
  componentDidMount(){
    this.props.loadMyMovieList();
    // console.log('results', this.props.myMovieList)
  }

  render() {
    return (
      <div className='app-container' >

        <header className="Header">
          <SearchBoxContainer />
        </header>
        
        <body>
          <TitleList 
            title="Search Results" 
            movies={this.props.searchResults} />
        </body>
        
      </div>
    );
  }
}

export default App;
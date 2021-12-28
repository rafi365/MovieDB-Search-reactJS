import React from 'react';
import './App.css';
import './Searchbox';
import './MovieResult';
import Searchbox from './Searchbox';
import MovieResult from './MovieResult';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchval: '',
    query: '',
    error: null,
    isLoaded: false,
    apiresult: []
  };
    this.handleSearchval = this.handleSearchval.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchval(input){
    this.setState({searchval : input})
  }
  
  handleSubmit(){
    // this.setState({query: (x)=>{return this.state.searchval}})
    const search = Boolean(this.state.searchval);
    if(search){
      // alert('A query was submitted: "'+search+'"');
      const query = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/"+this.state.searchval;
      fetch(query, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          "x-rapidapi-key": "2b6a6301cfmsha30e64bbbc780dbp1fffe8jsn0fcfa13b61b2"
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            apiresult: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  }

  render() {
    return (
      <div>
        <Searchbox submitform={this.handleSubmit} searchval={this.state.searchval} searchboxhandler={this.handleSearchval} />
        <MovieResult result={this.state.apiresult}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Searchbox from './Searchbox';
import MovieResult from './MovieResult';
import MovieDetails from './MovieDetails';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchval: '',
    query: '',
    error: null,
    isLoaded: false,
    apiresult: [],
    moviedetailsresult: []
  };
    this.handleSearchval = this.handleSearchval.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieResult = this.handleMovieResult.bind(this);
  }

  handleSearchval(input){
    this.setState({searchval : input})
  }

  handleMovieResult(movieid){
    this.setState({//clear it so that the user knows its "loading"
      moviedetailsresult: []
    });
    const query = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+movieid;
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
          // isLoaded: true,
          moviedetailsresult: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          // isLoaded: true,
          // error,
          moviedetailsresult: []
        });
      }
    )
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
        <div className='split left'>
          <Searchbox submitform={this.handleSubmit} searchval={this.state.searchval} searchboxhandler={this.handleSearchval} />
          <MovieResult result={this.state.apiresult} handledetails={this.handleMovieResult}/>
        </div>
        <div className='split right'>
          <MovieDetails result={this.state.moviedetailsresult}/>
        </div>
      </div>
    );
  }
}

export default App;

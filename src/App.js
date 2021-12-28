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
    moviedetailsresult: [],
    detailIsLoading : false,
  };
    this.handleSearchval = this.handleSearchval.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieResult = this.handleMovieResult.bind(this);
  }

  handleSearchval(input){
    this.setState({searchval : input})
  }

  handleMovieResult(movieid){
    this.setState({//clears old data
      moviedetailsresult: [],
      detailIsLoading: true
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
          moviedetailsresult: result,
          detailIsLoading:false
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          moviedetailsresult: [],
          detailIsLoading:false
        });
      }
    )
  }
  
  handleSubmit(){
    const search = Boolean(this.state.searchval);
    if(search){
      this.setState({
        isLoaded:false
      });
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
          <MovieResult loaded={this.state.isLoaded} result={this.state.apiresult} handledetails={this.handleMovieResult}/>
        </div>
        <div className='split right'>
          <MovieDetails loading={this.state.detailIsLoading} result={this.state.moviedetailsresult}/>
        </div>
      </div>
    );
  }
}

export default App;

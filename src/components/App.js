
import React, { Component } from 'react';
import MoviesList from './MoviesList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
		};
		this.handleChangeMovies = this.handleMovieTitle.bind(this);
		this.handleAddMovieToList = this.handleAddMovieToList.bind(this);
	}
  handleMovieTitle(event) {
    this.setState({ movieTitle: event.target.value });
  }
  handleAddMovieToList() {
    let title = this.state.movieTitle;
    const movies = this.state.movies;
    movies.push(title);
    this.setState({ movies, movieTitle: '' });
  }
  render() {
    return (
      <MoviesList
        changeHandler={this.handleMovieTitle}
        addToMovies={this.handleAddMovieToList}
        title={this.state.movieTitle}
        movies={this.state.movies}
      />
    );
  }
}
const MoviesList = props => {
  return (
    <div>
      <input type="text" value={props.title} onChange={ props.changeHandler } />
      <button onClick={props.addToMovies}>Submit Movie</button>
      <ul>
        {props.movies.map((movie, i) => {
          return <li key={i + 1}>{movie}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
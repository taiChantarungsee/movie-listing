import React, { Component } from 'react';
import MovieComponent from './MovieComponent.js';

class App extends Component {

  constructor() {
	super();
	this.state = {
		movies: [],
	};
  }

  componentDidMount() { 

  	 const api_key = //ADD API KEY HERE

  	 var urls = [`http://www.omdbapi.com/?i=tt1219827&apikey=${api_key}`, 
  	 			      `http://www.omdbapi.com/?i=tt1790809&apikey=${api_key}`, 
  	 			      `http://www.omdbapi.com/?i=tt0944947&apikey=${api_key}`];

  	urls.map(url => fetch(url).then(y => { 
    	return y.json();
  	}).then(data => {
    	this.setState({movies: [...this.state.movies, data]});
  	}).catch(function() {
        console.log("API request failed.");
    }))}
	
  render(){
	return (
	  <div className="App">
	  	<div>
	   		{this.state.movies.map((movie) => (
	   		<MovieComponent poster={movie.Poster} title={movie.Title}/>
        ))}
      	</div>
	  </div>
	);
  }
}

export default App;

import React, { Component } from 'react';

const css = { //Style for movie div
		width: 300,
		height: 300,
		margin: 0,
		position: 'relative',
		overflow: 'hidden',
	}

const text = { //style for text
		position: 'absolute',
    	top: 250,
    	left: 5,
    	color: 'white',
	}

class MovieComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() { 
		console.log(this.props);
		return (
			<div style={css}>
				<img src={this.props.poster} onClick={() => console.log("hello")}/> 
				<div style={text}>{this.props.title}</div>
			</div>
		);
	}
}

export default MovieComponent;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieComponent from './MovieComponent.js';

import { mount } from "enzyme";

describe("MovieComponent", () => {
  let props;
  let mountedMovieComponent;
  const MovieComponent = () => {
    if (!mountedMovieComponent) {
      mountedMovieComponent = mount(
        <MovieComponent {...props} />
      );
    }
    return mountedMovieComponent;
  }

  beforeEach(() => {
    props = {
      movies: undefined,
    };
    mountedMovieComponent = undefined;
  });
  
  it("always renders a div", () => {
  	const divs = MovieComponent().find("div");
  	expect(divs.length).toBeGreaterThan(0);
	});
});
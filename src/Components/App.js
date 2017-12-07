'use strict';
//css
require('style-loader!./App.css');

import React, { Component } from 'react';
import MovieListItem from './movie_list_item.js';
import data from '../data.json';


class App extends Component {

  render() {
    return (
      <div className="root">
        <h1>Movie Reviews</h1>
        <ul>
          { data.movies.map(( movie,idx ) => (
            <li>
              <MovieListItem
                key={ idx }
                movie={ data.movies[idx] }
                review={ data.reviews[idx] }
              />
            </li>
           )) }
        </ul>

      </div>

    );
  }
}

export default App;

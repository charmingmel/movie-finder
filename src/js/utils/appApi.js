// Utilities

var AppActions = require('../actions/AppActions')
var Axios = require('axios');
var omdbUrl = 'http://www.omdbapi.com/?s='

module.exports = {
  searchMovies: function(movie) {
    Axios.get(omdbUrl + movie.title)
      .then(function(results) {
        AppActions.receiveMovieResults(results.data.Search)
      })
      .catch(function(err) {
        console.error('Error fetching data: '+ err)
      })
  }
}

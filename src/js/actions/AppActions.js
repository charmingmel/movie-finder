
var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var AppActions = {
  searchMovies: function(movie) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    })
  }
}


module.exports = AppActions;




// App Component

var React = require('react')
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')
var SearchForm = require('./SearchForm')
var MovieResults = require('./MovieResults')

var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function() {
    console.log('State:', this.state.movies)
    if(this.state.movies == '') {
      var movieResults = ''
    } else {
      var movieResults = <MovieResults movies={this.state.movies} />
    }

    return (
      <div className="app-container">
        <SearchForm />
        {movieResults}
      </div>
    )
  },

  _onChange: function() {
    this.setState(getAppState());
  }
})


function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}

module.exports = App;

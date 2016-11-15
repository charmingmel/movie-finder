var React = require('react')
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')
var SearchForm = require('./SearchForm')

var App = React.createClass({
  render: function() {
    return (
      <div>
        Movie Finder App
      </div>
    )
  }
})

module.exports = App;

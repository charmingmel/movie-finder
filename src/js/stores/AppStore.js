// Store

var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign');
var AppAPI = require('../utils/appApi')


var CHANGE_EVENT = 'change'

var _movies = []
var selected = ''

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addEventListener: function(callback) {
    this.on('change', callback)
  },
  removeEventListener: function(callback) {
    this.removeEventListener('change', callback)
  }
})

AppDispatcher.register(function(payload){
  var action = payload.action

  return true
})

module.exports = AppStore;




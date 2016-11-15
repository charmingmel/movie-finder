
var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign');
var AppAPI = require('../utils/appApi')

var AppStore = assign({}, EventEmitter.prototype, {
})



module.exports = AppStore;




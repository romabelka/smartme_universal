import dispatcher from 'js/dispatcher'
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var confStore = assign({}, EventEmitter.prototype, {


    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
dispatcher.register(function(action) {
    switch(action.actionType) {
    }
});

export default confStore
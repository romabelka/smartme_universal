import dispatcher from 'js/dispatcher'
import {CREATE_CONF, DELETE_CONF, CHANGE_CONF} from 'js/actions/types'
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

let conferences = []
var confStore = assign({}, EventEmitter.prototype, {
    add: function(info) {
        conferences.push(info)
    },

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
        case CREATE_CONF:
            confStore.add(action.data)
            confStore.emitChange()
            break
    }
});

export default confStore
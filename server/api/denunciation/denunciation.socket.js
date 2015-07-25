/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Denunciation = require('./denunciation.model');

exports.register = function(socket) {
    Denunciation.schema.post('save', function(doc) {
        onSave(socket, doc);
    });
    Denunciation.schema.post('remove', function(doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('denunciation:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('denunciation:remove', doc);
}
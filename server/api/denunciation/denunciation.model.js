'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DenunciationSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Denunciation', DenunciationSchema);
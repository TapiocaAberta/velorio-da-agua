'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DenunciationSchema = new Schema({
    name: String,
    address: String,
    date: Date,
    hour: String,
    description: String
});

module.exports = mongoose.model('Denunciation', DenunciationSchema);

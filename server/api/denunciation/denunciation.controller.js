'use strict';

var _ = require('lodash');
var Denunciation = require('./denunciation.model');

// Get list of denunciations
exports.index = function(req, res) {
    Denunciation.find(function(err, denunciations) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(denunciations);
    });
};

// Get a single denunciation
exports.show = function(req, res) {
    Denunciation.findById(req.params.id, function(err, denunciation) {
        if (err) {
            return handleError(res, err);
        }
        if (!denunciation) {
            return res.status(404).send('Not Found');
        }
        return res.json(denunciation);
    });
};

// Creates a new denunciation in the DB.
exports.create = function(req, res) {
    Denunciation.create(req.body, function(err, denunciation) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(denunciation);
    });
};

// Updates an existing denunciation in the DB.
exports.update = function(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Denunciation.findById(req.params.id, function(err, denunciation) {
        if (err) {
            return handleError(res, err);
        }
        if (!denunciation) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(denunciation, req.body);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(denunciation);
        });
    });
};

// Deletes a denunciation from the DB.
exports.destroy = function(req, res) {
    Denunciation.findById(req.params.id, function(err, denunciation) {
        if (err) {
            return handleError(res, err);
        }
        if (!denunciation) {
            return res.status(404).send('Not Found');
        }
        denunciation.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
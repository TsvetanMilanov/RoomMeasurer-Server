'use strict';
let express = require('express'),
    roomGeometryController = require('./../../controllers/room-geometry-controller'),
    identity = require('./../../common/identity');

module.exports = function(app) {
    let router = express.Router();

    router
        .get('/myRooms', identity.requiresAuthentication(), roomGeometryController.getMine)
        .get('/:id', identity.requiresAuthentication(), roomGeometryController.getById)
        .get('/', identity.requiresAuthentication(), roomGeometryController.getAll)
        .post('/', identity.requiresAuthentication(), roomGeometryController.createRoomGeometry);

    app.use('/api/roomGeometry', router);
};

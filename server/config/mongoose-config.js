'use strict';
let mongoose = require('mongoose'),
    modelsLoader = require('./../data/models'),
    dataImporter = require('./../data/data-importers/data-importer'),
    env = process.env.NODE_ENV || 'development';

module.exports = {
    configure: function() {
        let connectionString = 'mongodb://localhost:27017/RoomMeasurerDatabase',
            shouldSeedData = true,
            database;
        if (env === 'development') {
            // connectionString = 'mongodb://admin:admin@ds055872.mongolab.com:55872/angularjstestappdb';
            connectionString = 'mongodb://localhost:27017/RoomMeasurerDatabase';
        } else {
            connectionString = 'mongodb://admin:admin@ds033255.mongolab.com:33255/roommeasurerdatabase';
        }

        modelsLoader.loadModels();
        mongoose.connect(connectionString);
        database = mongoose.connection;

        database.once('open', function() {
            console.log('Database is running!');
            dataImporter.seedInitialData(shouldSeedData);
        });
    }
};

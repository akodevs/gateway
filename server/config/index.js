'use strict'

var path = require('path');

module.exports = {
    root: path.normalize(__dirname+ '/../..'),
    remoteDatabase: '',
    localDatabase: 'mongodb://localhost/meanstacktutorials'
}
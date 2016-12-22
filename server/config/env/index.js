/** 
 * Global Configuration
 * Env, root, port, secret, mongo, facebook, twitter google
 */

'use strict';

var path = require('path');
var _ = require('lodash');

var all = {
    env: process.env.NODE_ENV,

    // File root path
    root: path.normalize(__dirname + './../../..'),

    // Serer port 
    port: process.env.PORT || 8081,

    // Session Secret  
    secrets: { session: 'd03b84d4-513c-4cf5-8b78-d00f1858b1fb' },

    //  resetData: true,

    // User Roles for Dashboard
    userRoles: ['guest', 'user', 'admin'],  

    // Social Medias
    socialMedia: { 
        facebook: {
            clientID:     process.env.FACEBOOK_ID || 'id',
            clientSecret: process.env.FACEBOOK_SECRET || 'secret',
            callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
        }, 
        twitter: {
            clientID:     process.env.TWITTER_ID || 'id',
            clientSecret: process.env.TWITTER_SECRET || 'secret',
            callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
        }, 
        google: {
            clientID:     process.env.GOOGLE_ID || 'id',
            clientSecret: process.env.GOOGLE_SECRET || 'secret',
            callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
        }
    }
};

var sharedVariables = {
  // Save express settings here, initialized on setup
  app: null
};

module.exports = _.merge(all, sharedVariables,  require('./' + process.env.NODE_ENV + '.js') || {});
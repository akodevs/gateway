// User Model Schema
// TODO: 
//      Add Authentication Types 
//      Add Patterns for Test
//      Add these in Schema
//          provider
//          roles
//          clientid
//          

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    validators = require('mongoose-validators');
    //authTypes = ['facebook', 'google'],
    //patterns = require('../../components/patterns');

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: validators.isEmail()   
    },
    name: {
        type: String, 
        trim: true,
        //validate: validators.matches(patterns.isTitle, {skipEmpty:true})
    },
    hashedPassword: String,
    salt: String, 
})
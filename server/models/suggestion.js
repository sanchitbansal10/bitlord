'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var SuggestionSchema = new Schema(
{
        name:String,
        age:String,
        occupation:String,
        budget:String,
        marital:String,
        targetLocation:String
})

module.exports = mongoose.model('Suggestion',SuggestionSchema)
const mongoose = require('mongoose')
var Suggestion = require('../models/suggestion')


let submitSuggestion = (req,res) => {

    var suggestion = new Suggestion(req.body.suggestion);
    suggestion.save(function(err,res){
    if(err){
    console.log('error in saving')}
    if(res){
        console.log('user added')
        console.log(req.body)
    }
    })
}

module.exports = submitSuggestion
'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var TravelSchema = new Schema ({
        name:String,
        transport:{
            pnr:String,
           cost:String,
           info:String
        },
        accomodation:{
            hotel:{
                date:String,
                address:String,
                cost:String,
                name:String
            }
        },
        other:{
            info:[String]
        }
})

module.exports = mongoose.model('Travel',TravelSchema)

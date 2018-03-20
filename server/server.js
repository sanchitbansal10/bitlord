const bodyParser = require('body-parser');

const express = require('express');

const port = process.env.PORT || 5000;
const router = express.Router()
const mongoose = require('mongoose')




//controller import
const submitSuggestion = require('./controller/submitSuggestion')
/* const submitInterest = require('./controller/submitInterest')
const getUserData = require('./controller/getUserData')
const giveInterestedPeople = require('./controller/giveInterestedPeople') */


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/trapp");


var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })


const app = express();


//routes
app.post('/submitSuggestion',jsonParser,submitSuggestion)
/* app.get('/getUserData',getUserData)
app.post('/submitInterest',jsonParser,submitInterest)
app.get('/exploreInterest',giveInterestedPeople)
 */





app.listen(port, () => console.log(`Listening on port ${port}`));
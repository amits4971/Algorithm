var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var things = require('./things.js')

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/signup', things)

app.listen(3000)

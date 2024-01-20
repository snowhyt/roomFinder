//kaya express dahil framework mo ay node js express
const express = require("express");

//mongo db
const dbconfig= require('./db.js');

const app = express();

//router
const roomsRoute = require('./routes/roomsRoute.js')

app.use('/api/rooms',roomsRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node js server ${port}`));
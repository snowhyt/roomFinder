//initialize the package mongoose or mongodb
const mongoose = require("mongoose");

//connect the database using mongoose
var mongoURL = 'mongodb+srv://oliver-admin:oliver-password@cluster0.klmecst.mongodb.net/db-rooms'

//parameter
mongoose.connect(mongoURL)

//establishing connection
var connection = mongoose.connection

//error parameter
connection.on('error',() =>{
    console.log('Mongo DB connection failed')
} )

connection.on('connected', ()=>{
    console.log('Mongo DB connection successful ')
})

module.exports = mongoose

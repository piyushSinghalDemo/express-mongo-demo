require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config.js');
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log(err);
    process.exit();
});

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('server started'))
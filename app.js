// Import express library and create an express application instance
const express = require('express')
const app = express();
const cors = require('cors')

// Global Middleware:

// Enables JSON bodies to be parsed
app.use(express.json());

// Logs all requests to terminal
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next()
})

// Adds a custom header
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Learning Express with Tom');
    next();
})
app.use(cors())

// Routing
const fruitRoute = require("./routes/fruitRoutes")
app.use('/fruits', fruitRoute)


module.exports = app
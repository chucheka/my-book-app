// Require Dependencies
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')



// Instances of dependencies
const app = express();
const bookRoute = require('./controllers/routes/book')

// Use Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Assign Routes
app.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to our book club'
    })
})

app.use('/books', bookRoute)
// Listen

app.listen(8080, () => {
    console.log('Server started on port 8080')
})

module.exports = app;
require('./src/config/firebase_config')
require('./src/config/mongodb_config')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//import routes
const userRoutes = require('./src/routes/users')
const articlesRoutes = require('./src/routes/articles')

// use routes

app.use('/api/users', userRoutes);
app.use('/api/articles', articlesRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
const mongoose = require('mongoose')

const MONGO_DB_URL = 'mongodb+srv://pavan6476252:7b9mbednea@pavan.p9x1pth.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(() => {
        console.log("Couldn't connect to MongoDB");
    })

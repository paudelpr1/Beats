const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_URL, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.log(`Error connecting to the database. n${err}`);
    })


//Define routes and middleware
app.get('/', (req, res) => {
    res.send('Hello World')
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
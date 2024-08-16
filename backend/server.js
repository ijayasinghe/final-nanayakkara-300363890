const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// require('dotenv').config();

const app = express();

app.use(express.json())

const port = process.env.PORT || 5000;

const uri = "mongodb+srv://user1:300363890@cluster0.t7jyf5u.mongodb.net/BookDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true   })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
    
    
// import routes
const bookRouter = require('./routes/books');
    
// adding /activity to before all routes
app.use('/api/v1/book', bookRouter);
    
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
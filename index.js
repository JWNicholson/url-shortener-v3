const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to database
connectDB();

//middleware
app.use(express.json({extented:false}));

const PORT = 5000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

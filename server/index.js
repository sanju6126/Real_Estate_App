// const express = require('express');

// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();
// const cors = require('cors');
import express from 'express'
import connect from './database/conn.js';
// import cors from 'cors';
// import router from './router/route.js'




const app = express();


//mongodb connection
// mongoose.connect(process.env.MONGO_URL, () => console.log('MongoDB has been connected'));


//starting server
// app.listen(process.env.PORT, () => console.log('Server listening on port '))



// start server only when we have valid connection
const port = 8080;

connect().then(() => {
    try {
        app.listen(port,() =>{
            console.log(`Server connected to http://localhost:${port}`);
        
        })
    }
    catch (error) {
        console.log('Cannot connect to the server');
    }
}).catch(error => {
    console.log("Invalid database connection");

})


// importing
import express from 'express';
// app config
const app =  express();
const port = process.env.PORT || 9000;


// middleware

// DBconfig

///??????

// api routes
app.get('/', (req,res)=> res.status(200).send('Hello world'))

// listen
app.listen(port, ()=>console.log(`Running on ${port}`))
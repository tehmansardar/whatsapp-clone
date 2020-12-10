// importing
import express from 'express';
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
// app config
const app =  express();
const port = process.env.PORT || 9000;


// middleware

// DBconfig
const connection_url = 'mongodb+srv://admin:VTBfuQ5lkLrUSumM@cluster0.nhuw8.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;
db.once('open', ()=>{
    console.log('DB connected');
})

///??????

// api routes
app.get('/', (req,res)=> res.status(200).send('Hello world'))

// listen
app.listen(port, ()=>console.log(`Running on ${port}`))
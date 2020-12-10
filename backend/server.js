// importing
import express from 'express';
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
// app config
const app =  express();
const port = process.env.PORT || 9000;


// middleware
app.use(express.json())

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

app.post('/messages/new', (req,res)=>{
    const dbMessages = req.body;
    Messages.create(dbMessages,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, ()=>console.log(`Running on ${port}`))
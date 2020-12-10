// importing
import express from 'express';
import mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'
import Messages from './dbMessages.js'
// app config
const app =  express();
app.use(cors())
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1121336",
    key: "9e0c40915bb55ba90506",
    secret: "e0823364852571b4715e",
    cluster: "ap2",
    useTLS: true
  });

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

    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()

    changeStream.on('change', change=>{
        console.log('A change occur', change)

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name : messageDetails.name,
                message : messageDetails.message,
                timestamp : messageDetails.message.timestamp,
                recieved : messageDetails.message.recieved,
            })
        }else{
            console.log('Error triggering pusher');
        }
    })
})

///??????

// api routes
app.get('/', (req,res)=> res.status(200).send('Hello world'))

app.get('/messages/sync', (req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

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
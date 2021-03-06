import React, {useState} from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import axios from './axios'
import './Chat.css';
const Chat = ({messages}) => {

    const [input, setInput] = useState('')

    const sendMessage = e=>{
        e.preventDefault()
        if(input){
        axios.post('/messages/new', {
            message: input,
            name: 'Temi',
            timestamp: new Date().toUTCString(),
            recieved: true
        })
        setInput('')
        }
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                { messages.map(message=>(
                    <p key={message._id} className={`chat_message ${message.recieved && "chat_reciever"}`}>
                        <span className="chat_name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="chat_timestamp">
                        {message.timestamp}
                        </span>
                    </p>
                )) }
            </div>
            <div className="chat__footer">
                <SentimentSatisfiedOutlinedIcon />
                <form onSubmit={sendMessage}>
                    <input value={input} onChange={ e => setInput(e.target.value)} type="text" placeholder="Type message..." />
                    <button type="submit">Sen Message</button>
                </form>
                <MicOutlinedIcon />
            </div>
        </div>
    )
}

export default Chat

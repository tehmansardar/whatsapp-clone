import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import './Chat.css';
const Chat = () => {
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
                <p className="chat_message chat_reciever">
                    <span className="chat_name">
                        Temi
                    </span>
                    Hey, there how's going on your side, tell something.
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">
                        Sanna
                    </span>
                    Hey, there how's going on your side, tell something.
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <SentimentSatisfiedOutlinedIcon />
                <form>
                    <input type="text" placeholder="Type message..." />
                    <button type="submit">Sen Message</button>
                </form>
                <MicOutlinedIcon />
            </div>
        </div>
    )
}

export default Chat

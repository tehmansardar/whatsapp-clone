import {useEffect,useState} from 'react'
import Pusher from 'pusher-js'
import axios from './axios'
import Sidebar from './Sidebar'
import Chat from './Chat'

import './App.css';

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync').then(response=>{
       setMessages(response.data)
    })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('9e0c40915bb55ba90506', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', newMessage => {
        setMessages([...messages, newMessage])
    });

  }, [messages])
  console.log(messages);
  return (
    <div className="App">
      <div className="app__body">
          <Sidebar/>
          <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;

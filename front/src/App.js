import {useEffect} from 'react'
import Pusher from 'pusher-js'
import Sidebar from './Sidebar'
import Chat from './Chat'

import './App.css';

function App() {
  useEffect(() => {
    const pusher = new Pusher('9e0c40915bb55ba90506', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', data => {
        alert(JSON.stringify(data));
    });

  }, [])
  return (
    <div className="App">
      <div className="app__body">
          <Sidebar/>
          <Chat />
      </div>
    </div>
  );
}

export default App;

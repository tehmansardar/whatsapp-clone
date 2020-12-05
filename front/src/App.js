import Sidebar from './Sidebar'
import Chat from './Chat'

import './App.css';

function App() {
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

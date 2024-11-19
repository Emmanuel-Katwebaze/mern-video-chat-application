import React from 'react';
import { VideoCall } from './components/VideoCall';
import { JoinRoom } from './components/JoinRoom';
import { SocketProvider } from './context/SocketContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <SocketProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
          <Routes>
            <Route path="/" element={<JoinRoom />} />
            <Route path="/room/:roomId" element={<VideoCall />} />
          </Routes>
        </div>
      </Router>
    </SocketProvider>
  );
}

export default App;
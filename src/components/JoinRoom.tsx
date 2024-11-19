import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Users } from 'lucide-react';

export const JoinRoom: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }
  };

  const generateRandomRoom = () => {
    const randomRoom = Math.random().toString(36).substring(7);
    setRoomId(randomRoom);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-indigo-600 p-3 rounded-full">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Join Video Call
        </h1>

        <form onSubmit={handleJoinRoom} className="space-y-6">
          <div>
            <label htmlFor="roomId" className="block text-sm font-medium text-gray-700 mb-2">
              Room ID
            </label>
            <div className="relative">
              <input
                type="text"
                id="roomId"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="Enter room ID"
                required
              />
              <button
                type="button"
                onClick={generateRandomRoom}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-indigo-600 hover:text-indigo-800"
              >
                Generate
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center space-x-2"
          >
            <Users className="w-5 h-5" />
            <span>Join Room</span>
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Share the Room ID with others to start a video call
        </p>
      </div>
    </div>
  );
};
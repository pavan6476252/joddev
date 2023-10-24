import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from "socket.io-client";
import authStore from '../../global/global';


const participants = [
  { id: 1, name: 'User 1', video: true, audio: true },
  { id: 2, name: 'User 2', video: true, audio: true },
  { id: 3, name: 'User 3', video: true, audio: false },
  { id: 4, name: 'User 4', video: false, audio: true },
  { id: 2, name: 'User 2', video: true, audio: true },
  { id: 3, name: 'User 3', video: true, audio: false },
  { id: 4, name: 'User 4', video: false, audio: true },
  { id: 2, name: 'User 2', video: true, audio: true },
  { id: 3, name: 'User 3', video: true, audio: false },
  { id: 4, name: 'User 4', video: false, audio: true },
];

type msg = {
  uid: string,
  msg: string,
  taggedUid: string,
  bot: boolean
}
type User = {
  email: string,
  name: string,
  picture: string,
  uid: string,
  id: string,
}

function ViewRoomScr() {
  const { id } = useParams();


  const user = authStore(state => state.user);

  const [socket, _] = useState(io("ws://localhost:3000"));


  return (
    <div className="flex h-screen bg-gray-200 ">
      {/* chats  */}
      <ChatBox />
      <VideoBox />

    </div>
  );
}

export default ViewRoomScr;


function VideoBox() {
  return (<div className='relative lg:w-3/4 bg-black rounded-lg m-4 ml-0 w-full '>
    <AllParticipants />
  </div>)
}

function AllParticipants() {
  return <div className='absolute bottom-0 left-0 w-full bg-red-200 h-36 '>
    <div className=" w-full h-full overflow-x-auto overflow-y-auto flex flex-nowrap  hide-scroll-bar">

      {
        participants.map(e => <div className="inline-block p-2 ">
          <div
            className="w-56 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>)

      }
    </div>

  </div>
}
function ChatBox() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]); // State to store chat messages
  const [newMessage, setNewMessage] = useState(''); // State to store the new message input
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  // Scroll to the bottom of the chat container when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className=" lg:w-1/4  bg-black rounded-lg m-4 relative">
      <div className="p-4 bg-gray-800 rounded-t-lg">
        <h1 className="text-white text-lg font-bold">Chat</h1>
      </div>

      <div className="p-4 bg-gray-800 rounded-b-lg absolute bottom-0 left-0 w-full flex   items-center">
        <input
          type="text"
          name="message"
          id="message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 rounded-l bg-gray-600 text-white"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className=" bg-blue-500 p-2   text-white  rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChatPage, UsersInfo, ChatBox, MessagesBox, Message, Bottom, SendButton, MessageDate, BackButton, Header } from './styled.js';
import { useSocketContext } from '../../contexts/SocketContext.jsx'
import { useUserContext } from '../../contexts/UserContext.jsx'
import { Input } from '../../globalStyles.js';

const Chat = () => {
  const socket = useSocketContext()
  const { roomId, username } = useUserContext();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('messageClient', (data) => {
      setMessages((prev) => [...prev, { ...data, type: 'message' }]);
    });

    socket.on('joinRoom', (username) => {
      setMessages((prev) => [...prev, { username, message: 'Joined', type: 'info' }]);
    });

    socket.on('leaveRoom', (username) => {
      setMessages((prev) => [...prev, { username, message: 'Leave', type: 'info' }]);
    });

    return () => socket.emit('leaveRoom', { roomId, username });
  }, [roomId, socket, username])

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  const handleSendMessage = async () => {
    if (!message) return;

    const newMessage = {
      roomId,
      message,
      username,
      date: (new Date(Date.now())).getHours() + ':' + (new Date(Date.now())).getMinutes(),
    }
    await socket.emit('message', newMessage);
    setMessages((prev) => [...prev, { ...newMessage, type: 'message' }]);
    setMessage('');
  }

  return (
    <ChatPage>
      <ChatBox>
        <Header>
          <BackButton onClick={() => navigate('/')}>Back</BackButton>
          <UsersInfo>
            {username ? username : 'Ghost'}
          </UsersInfo>
        </Header>
        <MessagesBox ref={scrollRef}>
          {
            messages.map((item) => (
              item.type === 'message' ?
                <Message key={Math.floor(Math.random() * 1000)} $owner={(item.username === username) ? true : false}>
                  {item.message}
                  <MessageDate>{item.date}</MessageDate>
                </Message>
                :
                <p key={Math.floor(Math.random() * 1000)}>{item.username} {item.message} to room</p>
            ))
          }


        </MessagesBox>
        <Bottom>
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </Bottom>
      </ChatBox>
    </ChatPage>
  )
}

export default Chat
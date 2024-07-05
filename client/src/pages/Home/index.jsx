import React, { useState } from 'react'
import { Form, HomePage, InputField, Title } from './styled'
import { Button, ErrorMessage, Input, Label } from '../../globalStyles'
import { useSocketContext } from '../../contexts/SocketContext'
import { useUserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const socket = useSocketContext();
  const navigate = useNavigate();
  const { username, roomId, setUsername, setRoomId } = useUserContext();
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !roomId) {
      return setError("Fields cannot be left blank");
    }
    socket.emit("room", { roomId, username });
    setError("")
    navigate("/chat");
  }

  return (
    <HomePage>
      <img src='./logo.png' alt='logo' style={{width: 50, height: 50, marginBottom: 10}}/>
      <Title> Welcome to Chat App</Title>
      <Form onSubmit={onSubmit}>
        <InputField>
          <Label>Username</Label>
          <Input placeholder='Enter your name' onChange={(e) => setUsername(e.target.value)} value={username} />
        </InputField>
        <InputField>
          <Label>Room ID</Label>
          <Input placeholder='Enter room id' onChange={(e) => setRoomId(e.target.value)} value={roomId} />
        </InputField>
        <Button>Start Chat</Button>
      </Form>
      {
        error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
    </HomePage>
  )
}

export default Home
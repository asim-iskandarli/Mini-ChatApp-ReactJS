import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import GlobalStyle from './globalStyles';
import { Fragment } from 'react';




function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Fragment>

  );
}

export default App;

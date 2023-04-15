import './App.css';
import React, { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Login from './components/Login.tsx';
import Chat from './components/Chat';
import Home from './components/Home';


function App() {
  const [originSmartAccount,setOriginSmartAccount] = useState({})
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setOriginSmartAccount={setOriginSmartAccount}/>} />
        <Route path="/chat" element={<Chat originSmartAccount={originSmartAccount}/>} />
      </Routes>
    </>
  );
}
export default App;
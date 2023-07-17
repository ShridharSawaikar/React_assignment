import { useState } from 'react';
import './App.css';
import Myform from './Components/loginForm/form'
// import home from './Components/home/Home'
import Home from './Components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Button from '@mui/material/Button'
// import Button from '@mui/material/Button'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Myform />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

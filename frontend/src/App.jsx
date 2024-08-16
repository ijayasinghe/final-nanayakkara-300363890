import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import React from 'react';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
      </Routes>
  )
}

export default App

// Importing Dependecies
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Components
import UserLayout from './components/Layout/Userlayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User */}
        <Route path="/" element={<UserLayout />} />
        
        {/* Admin */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
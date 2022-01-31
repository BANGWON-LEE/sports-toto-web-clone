import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './pages/IndexPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact element={<IndexPage/>} path="/" />
    </Routes>
  </BrowserRouter> 
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import Home from './components/Home'
import Landing from './components/Landing'
import GamesHistoric from './components/GamesHistoric';

function App() {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/triqui' element={<Home />}/>
          <Route path='/games' element={<GamesHistoric />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
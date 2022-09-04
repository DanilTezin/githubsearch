import React, { useEffect } from 'react';
import {Routes, Route} from "react-router-dom"
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { gapi } from 'gapi-script';



function App() {



  return (
    <>
    <Navigation/>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorite' element={<FavoritesPage/>}/>

      </Routes>
    </>
  );
}

export default App;

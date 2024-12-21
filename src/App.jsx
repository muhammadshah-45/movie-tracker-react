import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FavoriteMovie from './components/FavoriteMovie'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<MovieList/>}/>
      <Route path='/favorite-movie' element={<FavoriteMovie/>}/>
     </Routes>
    </>
  )
}

export default App

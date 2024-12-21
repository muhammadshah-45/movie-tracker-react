import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {  MoviesProvider } from './context/MovieContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MoviesProvider>
  </StrictMode>,
)
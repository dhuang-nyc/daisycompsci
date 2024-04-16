import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './pages/HomePage';
import { About} from './pages/About';
import { BrowserRouter } from 'react-router-dom'
import { SocialIcons } from './components/icons';
import { Header } from './components/header';

export default function App () {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <SocialIcons />
      </div>
      
    </BrowserRouter>
  )
}

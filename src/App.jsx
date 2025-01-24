import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import Vacancies from './pages/vacancies/Vacancies'
import About from './pages/about/About'

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vagas" element={<Vacancies/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App

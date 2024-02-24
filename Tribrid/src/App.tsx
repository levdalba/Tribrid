import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/service'
import Work from './pages/work'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </Router>
    )
}

export default App

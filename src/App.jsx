import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Header from './components/Header'
import Contact from './views/Contact'
import Services from './views/Services'
import Footer from './components/Footer'
import Booking from './views/Booking'
import NotFound from './views/404-NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
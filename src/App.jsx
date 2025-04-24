import './App.css'
import { Routes, Route } from "react-router"

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Vans from './components/Vans'

import "./server"

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

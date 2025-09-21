import './App.css'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Host from './pages/Host'
import Layout from './components/Layout'

import "./server"

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

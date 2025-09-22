import './App.css'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/Host/HostLayout'

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
          <Route element={<HostLayout />}>
            <Route path='/host' element={<Dashboard />} />
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

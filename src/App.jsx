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
        <Route path='/' element={<Layout />}>
        {/* index means: when the path is exactly /, render <Home /> */}
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
          {/* index -> that means show the path where the layout component have */}
            <Route index  element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

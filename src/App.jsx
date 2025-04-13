import './App.css'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

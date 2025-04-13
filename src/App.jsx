import './App.css'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

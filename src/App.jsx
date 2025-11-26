import './App.css'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productdetail from './Pages/Productdetail';
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/contact' element={ <Contact/> } />
    <Route path='/about' element={ <About/> } />
    <Route path='/product/:id' element={ <Productdetail/> } />
   </Routes>
   </BrowserRouter>   
    </>
  )
}

export default App;
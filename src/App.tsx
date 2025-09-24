import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Layout from './pages/layout'
import About from './pages/about/page'
import Services from './pages/services/page'
import Industires from './pages/industries/page'

function App() {
 

  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/' element={<Layout/>}>
            <Route path='about' element={<About/>} />
            <Route path='services' element={<Services/>} />
            <Route path='industries' element={<Industires/>} />
        </Route>
    </Routes>
  </BrowserRouter>)
}

export default App

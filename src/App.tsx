import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Layout from './pages/layout'

function App() {
 

  return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
        </Route>
    </Routes>
  </BrowserRouter>)
}

export default App

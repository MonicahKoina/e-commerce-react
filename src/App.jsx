import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Layout from './Components/Layout/Layout'

function App() {
  return <>
  <BrowserRouter>
  <Layout/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Shop' element={<Shop/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>
  </>;
}

export default App

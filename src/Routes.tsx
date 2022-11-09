import { Routes, Route } from 'react-router-dom'
import { Feed } from './pages/Feed'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/feed" element={<Feed />}/>
    </Routes>
  )
}
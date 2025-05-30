import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Base from './Components/Base'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Base/>}>
    <Route index element={<Home/>}/>
    <Route path="/aboutUS" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}



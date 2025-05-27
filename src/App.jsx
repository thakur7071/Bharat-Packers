import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Base from './Components/Base'

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Base/>}>
    <Route index element={<Home/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}



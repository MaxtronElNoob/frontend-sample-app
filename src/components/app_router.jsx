import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Voluntario from '../pages/voluntario'
import Solicitante from '../pages/solicitante.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/voluntario' element={<Voluntario />} />
        <Route path='/solicitante' element={<Solicitante />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

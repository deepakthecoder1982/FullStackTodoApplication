import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserGuide from '../pages/UserGuide'
import Contact from '../pages/Contact'
import About from '../pages/About'

function Allroutes() {
  return (
        <Routes>
            <Route path='/userGuide' element={<UserGuide/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about-us' element={<About/>}/>
        </Routes>
  )
}

export default Allroutes
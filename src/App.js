import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {
  return (
    <>
    <Navbar />    
    <News pagesize = {12} country = {'us'}/>
    </>
  )
}

export default App

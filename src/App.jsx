import React from 'react'
import MobileNavbar from './components/MobileNavbar.jsx'
import Sidebar from './components/Sidebar.jsx'

const App = () => {
  return (
    <div>
      <MobileNavbar />
      <div className='hidden md:flex'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App


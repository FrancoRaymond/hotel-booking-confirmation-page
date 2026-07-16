import React from 'react'
import MobileNavbar from './components/MobileNavbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainPage from './components/MainPage.jsx'

const App = () => {
  return (
    <div>
      <MobileNavbar />
      <div className='md:flex'>
        <Sidebar />
        <MainPage />
      </div>
    </div>
  )
}

export default App


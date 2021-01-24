import React from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'

const App = () => {
  return (
    <div>
        <GlobalStyle />
        <Navbar />
        <MainContent />
    </div>
  )
}

export default App


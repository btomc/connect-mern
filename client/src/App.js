import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import { getPosts } from './actions/posts'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
        <GlobalStyle />
        <Navbar />
        <MainContent />
    </div>
  )
}

export default App


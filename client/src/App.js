import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'   
import { useDispatch } from 'react-redux'

import GlobalStyle from './globalStyles'
import { getPosts } from './actions/posts'
import Home from './pages/Home'
import MyPosts from './pages/MyPosts'
import Login from './pages/Login'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Router>
        <GlobalStyle />
        <Route path='/myposts' component={MyPosts} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/' component={Home} exact />
    </Router>
  )
}

export default App


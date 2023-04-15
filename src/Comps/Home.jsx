import React from 'react'
import Nav from './NavBar'
import Homepage from './HomePage.jpg'

const Home = () => {
  return (
    <>
    <Nav />
      <h1>Home</h1>
      <img src={Homepage} className="home" alt="logo" />
    </>
  )
}

export default Home
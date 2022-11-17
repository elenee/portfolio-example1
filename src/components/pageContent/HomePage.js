import React from 'react'
import About from '../about/About'
import Blog from '../blog/Blog'
import Branding from '../branding/Branding'
import Home from '../home/Home'
import Services from '../services/Services'
import Wrapper from '../wrapper/Wrapper'
import WrapperOne from '../wrapper1/WrapperOne'

const HomePage = () => {
  return (
    <>
    <Home />
    <Branding />
    <About />
    <Services />
    <Wrapper />
    <WrapperOne />
    <Blog />
    </>
  )
}

export default HomePage
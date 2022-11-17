import { KeyboardDoubleArrowRightRounded } from '@mui/icons-material'
import React from 'react'
import Blogdata from './BlogData'
import "./Blog.css";

const Blog = () => {
  return (
    <section className='blog services' id='blog'>
        <div className='container mtop'>
            <div className='heading'>
                <h3>LATEST BLOG</h3>
                <h1>READ NEW INFORMATIONS EVERY DAY</h1>
            </div>
            <div className='contain grid mtop'>
                {Blogdata.map((result) => {
                    return(
                        <div className='box'>
                            <div className='img'>
                                <img src={result.cover} alt=''/>
                            </div>
                            <div className='text1'>
                                <span>{result.date}</span>
                                <h2>{result.title}</h2>
                                <a href='/'>Read More <KeyboardDoubleArrowRightRounded className='icon'/></a>
                            </div>
                        </div>                   
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Blog
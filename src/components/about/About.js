import React from 'react'
import "./About.css";
const About = () => {
    const data = [
        {
          title: "Who I Am And What I Do",
          desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
          desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          cover: "../../assets/charles1.jpg",
        }
      ]
  return (
    <>
    <section className='about mtop' id='about'>
        <div className='container flex'>
            {data.map((result)=>{
                return(
                    <>
                    <div className='left mtop'>
                        <div className='heading'>
                            <h3>About</h3>
                            <h1>{result.title}</h1>
                        </div>
                        <p>{result.desc1}</p>
                        <p>{result.desc2}</p>
                        <p>{result.desc3}</p>
                        <button className='primary-btn'>Download CV</button>
                    </div>
                    <div className='right'>
                        <div className='img'>
                            <img src='https://pbs.twimg.com/media/FVpH0PbWAAEh7br.jpg' alt='charles1'/>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default About 
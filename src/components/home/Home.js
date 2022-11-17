import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='container flex'>
            <div className='left'>
                <div className='img'>
                    <img src='https://www.f1fantasytracker.com/Images//Drivers/2021/LeclercFull.png' alt='charles'/>
                </div>
            </div>
            <div className='right mtop'>
                <h1>It's<br/>Charles Lecrec</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <button className='primary-btn'>Contact us</button>
            </div>
        </div>
    </section>
  )
}

export default Home
import React from 'react'
import "./WrapperOne.css";

const WrapperOne = () => {
    const data = [
        {
          num: "5.0%",
          text: "RACE WINS",
        },
        {
          num: "17.8%",
          text: "POLE POSITIONS",
        },
        {
          num: "22.8%",
          text: "PODIUMS",
        },
        {
          num: "72.3%",
          text: "POINTS FINISHES",
        },
      ]
  return (
    <section className='branding wrapper1'>
        <div className='container grid1'>
            {data.map((result) => {
                return(
                    <>
                    <div className='box'>
                        <h1>{result.num}</h1>
                        <p>{result.text}</p>
                    </div>
                    </>
                )
            })}
        </div>
    </section>
  )
}

export default WrapperOne
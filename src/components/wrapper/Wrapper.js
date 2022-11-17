import React from "react";
import "./Wrapper.css";

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES",
      heading: "GET THE BEST FOR YOU",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit",
    },
  ];
  return (
    <section className="branding wrapper" id="contact">
      <div className="container">
        {data.map((result) => {
          return (
            <div className="box">
              <h3>{result.title}</h3>
              <h2>{result.heading}</h2>
              <p>{result.desc}</p>
              <button className="primary-btn">Contact us</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wrapper;

import React from "react";
import ServicesData from "../services/ServiceData";
import "./Services.css";

const Services = () => {
  return (
    <section className="services mtop" id="services">
      <div className="container">
        <div className="heading">
          <h3>SERVICES</h3>
        </div>
        <div className="contain grid mtop">
          {ServicesData.map((result) => {
            return (
              <>
                <div className="box">
                  <div className="img">
                    <img src={result.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{result.title}</h2>
                    <p>{result.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "../styles/GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with StayIn</span>
          <span className="secondaryText">
          Discover your perfect room for rent and make it your ideal home away from home.
            <br/>
            Find your
            residence soon
          </span>
          <button className="button">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

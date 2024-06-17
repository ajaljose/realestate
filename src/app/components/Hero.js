import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__header">
        <h1 className="hero__header__name">Realvi</h1>
        <p className="hero__header__tagline">
          Real property that includes land and anything permanantly attached to
          it or built on it.
        </p>
        <button className="primary_btn hero__header__button">Contact</button>
      </div>
      <div className="hero__banner">
        <h1 className="hero__banner__head">Mandma</h1>
        <img
          className="hero__banner__image"
          src="./assets/images/bu1.png"
        ></img>
        <div className="hero__banner__finsol">
          <h3>Financial Solutions</h3>
          <hr></hr>
          <p>
            Easy Build was designed to build your valuable property effortlessly
          </p>
        </div>
        <img
          className="hero__banner__smImg1"
          src="./assets/images/bu6.jpg"
        ></img>
        <p className="hero__banner__tagline2">
          You will have anything nearby: supermarket, buses,
          stations,cinemas,hospitals.
        </p>
        <img
          className="hero__banner__smImg2"
          src="./assets/images/bu4.jpg"
        ></img>
        <img
          src=".//assets/images/iphone.png"
          className="hero__banner__iphone"
        ></img>
      </div>
      <div className="hero__footer">
        <div className="hero__footer__features">
          <h4>REALESTATE</h4>
          <h4>HOUSEHUNTING</h4>
          <h4>REALESTATEAGENT</h4>
          <h4>PROPERTY</h4>
        </div>
        <p className="hero__footer__desc">Real estate is property consisting of land and the buildings on it,along with its natural resources.</p>
      </div>
    </div>
  );
}

export default Hero;

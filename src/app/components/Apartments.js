import React from "react";

function Apartments() {
  return (
    <div className="apartment">
      <h1 className="apartment__header">Our Apartments</h1>
      <div className="apartment__grid">
        <div
          className="apartment__grid__half"
          id="left"
          style={{
            backgroundImage: "url('/assets/images/bu2.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h1>Bonanza Palace</h1>
        </div>
        <div
          className="apartment__grid__half"
          id="right"
          style={{
            backgroundImage: "url('/assets/images/bu8.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h1>Lego Beauty</h1>
        </div>
      </div>
      <div className="apartment__resource">
        <div className="apartment__resource__header">
          <h3>RealestateLife</h3>
          <h3>RealestateInvesting</h3>
          <h3>Property</h3>
        </div>
        <div className="apartment__resource__body">
          <div className="left">
            <h2>NATURAL RESOURCES</h2>
            <p>Reat estate is different from personal property</p>
            <p>Which is not permanantly attached to the land</p>
            <p>One of the largest initial real estate deals in history</p>
            <p>This is treaty paved the way for westeren expansion</p>
          </div>

          <div
            className="mid"
            style={{
              backgroundImage: "url('/assets/images/bu9.jpg')",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="right">
            <p>Luxury</p>
            <p>RealtorLife</p>
            <p>Dreamhome</p>
            <p>Mortgage</p>
            <p>Architecture</p>
            <p>HouseHunting</p>
          </div>
        </div>
      </div>
      <h1 className="apartment__cliHeader">What clients say's</h1>
      <div
        className="apartment__client"
        style={{
          backgroundImage: "url('/assets/images/bu3.jpg')",
          backgroundSize: "cover",
        }}
      >
        <img src="./assets/images/left_ar.png"></img>

        <div className="apartment__client__review">
          <div
            className="banner"
            style={{
              backgroundImage: "url('/assets/images/bu3.jpg')",
              backgroundSize: "cover",
            }}
          >
            <img src="./assets/images/user.png"></img>
          </div>
          <p>"We are a very happy customer of Realvi. We talked to a borkerage firm and it was a big haslle,really archaic. Realvi was seamless and easy."</p>
        <div className="reviewer">
        <div className="reviewer__name">
          <h1>Arounda Smith</h1>
          <h3>CEO at RedPanda</h3>
        </div>
        <div className="reviewer__rating"> 4.5</div></div>
       
        </div>

        <img src="./assets/images/right_ar.png"></img>
      </div>
      <h1 className="apartment__cliHeader">Book your Apartment</h1>
      <div className="apartment__grid">
        <div
          className="apartment__grid__half"
          id="left"
          style={{
            backgroundImage: "url('/assets/images/bu4.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h1 className="darkHdr">Opulaence Inc Apartment</h1>
        </div>
        <div
          className="apartment__grid__half"
          id="right"
          style={{
            backgroundImage: "url('/assets/images/bu5.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h1 className="darkHdr">$2000/Month</h1>
          <button className="primary_btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Apartments;

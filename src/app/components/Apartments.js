import React from 'react'

function Apartments() {
  return (
    <div className='apartment'>
      <h1 className='apartment__header'>Our Apartments</h1>
      <div className='apartment__grid'>
        <div className='apartment__grid__half' id='left' style={{ backgroundImage: "url('/assets/images/bu2.jpg')", backgroundSize: 'cover' }}>
          <h1>Bonanza Palace</h1></div>
        <div className='apartment__grid__half' id='right' style={{ backgroundImage: "url('/assets/images/bu8.jpg')", backgroundSize: 'cover' }}>
          <h1>
          Lego Beauty
          </h1>
          </div>
      </div>
      <div className='apartment__resource'>
        <div className='apartment__resource__header'>
          <h3>RealestateLife</h3>
          <h3>RealestateInvesting</h3>
          <h3>Property</h3>
        </div>
        <div className='apartment__resource__body'>
          <div className='left'>
            <h2>NATURAL RESOURCES</h2>
            <p>Reat estate is different from personal property</p>
            <p>Which is not permanantly attached to the land</p>
            <p>One of the largest initial real estate deals in history</p>
            <p>This is treaty paved the way for westeren expansion</p>
          </div>

          <div className='mid' style={{ backgroundImage: "url('/assets/images/bu9.jpg')", backgroundSize: 'cover' }}>


          </div>
          <div className='right'>
            <p>Luxury</p>
            <p>RealtorLife</p>
            <p>Dreamhome</p>
            <p>Mortgage</p>
            <p>Architecture</p>
            <p>HouseHunting</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apartments
import React from 'react';
import h1 from '../images/h1.png'
import h2 from '../images/h2.png'
import h3 from '../images/h3.png'
import h4 from '../images/h4.png'
import h5 from '../images/h6.png'
import './services.css'

const Services = () => {
  return (
    <div>
      <section className='services'>
        <div className='heading'>
          <h1>Featured Property Types</h1>
          <p>Find All Type of Property.</p>
        </div>
        <div id="services-box">
          <div className="box">
            <img src={h1} alt="" />
            <h4>Family House</h4>
            <span>122 Property</span>
          </div>
          <div className="box">
            <img src={h2} alt="" />
            <h4>House & Villa</h4>
            <span>110 Property</span>
          </div>
          <div className="box">
            <img src={h3} alt="" />
            <h4>Apartment</h4>
            <span>99 Property</span>
          </div>
          <div className="box">
            <img src={h4} alt="" />
            <h4>Office & Studio</h4>
            <span>152 Property</span>
          </div>
          <div className="box">
            <img src={h5} alt="" />
            <h4>Villa & Condo</h4>
            <span>160 Property</span>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Services;

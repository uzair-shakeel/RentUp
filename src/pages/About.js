import React from 'react';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import Footer from '../components/Footer';
import './pages-css.css'
import Aboutimg from '../images/about.jpg'

const About = () => {
  return (
    <div>
      <Navbar />
      <section className='header about'>
        <h2>About Us - Who We Are?</h2>
      </section>
      <section className='about-container'>
        <div className="details">
          <h1>Our Agency Story</h1>
          <p>Check out our company story and work process</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button>More About Us</button>
        </div>
        <div className="img">
          <img src={Aboutimg} alt="" />
        </div>
      </section>

      <Question  />
      <Footer  />
    </div>
  );
}

export default About;

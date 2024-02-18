import React from 'react';
import './home.css'
import Blog from '../components/Blog';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Gallery from '../components/Gallery'
import Agents from '../components/Agents';
import Pricing from '../components/Pricing';
import Question from '../components/Question';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className='hero'>
        <div>
          <h1>Search Your Next Home</h1>
          <h5>Find new & featured property located in your local city.</h5>
        </div>
        <div className="booking">
          <div className="box">
            <p>City/Street</p>
            <input type="text" placeholder='Location' />
          </div>
          <div className="box">
            <p>Property Type</p>
            <input type="text" placeholder='Property Type' />
          </div>
          <div className="box">
            <p>Price Range</p>
            <input type="text" placeholder='Price Range' />
          </div>
          <div className="box box4">
            <p>Filter</p>
            <i class="fas fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </section>

      <Services />

      <Blog />

      <section className="banner">
        <p>Our Awards</p>
        <h1>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h1>

        <div className="banner-box">
          <div className="box">
            <div className="icon">
              <i class="fas fa-solid fa-trophy"></i>
            </div>
            <h1>32 M</h1>
            <p>Blue Burmin Award</p>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fas fa-solid fa-briefcase"></i>
            </div>
            <h1>43 M</h1>
            <p>Mimo X11 Award</p>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fas fa-sharp fa-solid fa-lightbulb"></i>
            </div>
            <h1>51 M</h1>
            <p>Australian UGC Award</p>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fas fa-solid fa-heart"></i>
            </div>
            <h1>42 M</h1>
            <p>IITCA Green Award</p>
          </div>
        </div>
      </section>

      <Gallery />

      <Agents />

      <Pricing  />

      <Question  />

      <Footer  />
    </div>
  );
}

export default Home;

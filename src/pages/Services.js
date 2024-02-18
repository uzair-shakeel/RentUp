import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import './pages-css.css'
import Question from '../components/Question'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <div>
      <Navbar  />
      <section className='header'>
        <h2>Services / All-Services</h2>
      </section>
      <Services  />
      <Question  />
      <Footer  />
    </div>
  );
}

export default Service;

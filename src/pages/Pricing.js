import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing'
import Question from '../components/Question';

const Pricings = () => {
  return (
    <div>
      <Navbar  />
      <section className='header pricings'>
        <h2>No Extra Fees. Friendly Support</h2>
      </section>
      <Pricing  />
      <Question  />
      <Footer  />
    </div>
  );
}

export default Pricings;

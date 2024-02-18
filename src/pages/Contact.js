import React from 'react';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import Footer from '../components/Footer';
import './pages-css.css'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className='header contact'>
        <h2>Get Helps & Friendly Support</h2>
      </section>
      <section className='contact-container'>
        <form >
          <h4>FillUp The Form</h4>
          <br />
          <div className="inputs">
            <input type="text" placeholder='UserName' />
            <input type="email" placeholder='Email Address' />
          </div>
          <input type="text" placeholder='Subject' />
          <textarea cols="30" rows="10"></textarea>
          <button>Submit Request</button>
        </form>
      </section>

      <Question  />
      <Footer  />
    </div>
  );
}

export default Contact;

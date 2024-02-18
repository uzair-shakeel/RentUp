import React from 'react';
import Navbar from '../components/Navbar';
import './pages-css.css'
import Blog from '../components/Blog'
import Question from '../components/Question'
import Footer from '../components/Footer'


const Blogs = () => {
  return (
    <div>
      <Navbar  />
      <section className='header blogs'>
        <h2>Blog Grid - Our Blogs</h2>
      </section>
      <Blog  />
      <Question  />
      <Footer  />
    </div>
  );
}

export default Blogs;

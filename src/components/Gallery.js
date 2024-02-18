import React from 'react';
import city1 from '../images/city-1.png'
import city2 from '../images/city-2.png'
import city3 from '../images/city-3.png'
import city4 from '../images/city-4.png'
import city5 from '../images/city-5.png'
import city6 from '../images/city-6.png'
import './gallery.css'

const Blog = () => {
    return (
        <div>
            <section className='gallery'>
                <h1>Explore By Location</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <div className="box-container">
                    <div className="box">
                        <img src={city1} alt="gallery-box" />
                    </div>
                    <div className="box">
                        <img src={city2} alt="gallery-box" />
                    </div>
                    <div className="box">
                        <img src={city3} alt="gallery-box" />
                    </div>
                    <div className="box">
                        <img src={city4} alt="gallery-box" />
                    </div>
                    <div className="box">
                        <img src={city5} alt="gallery-box" />
                    </div>
                    <div className="box">
                        <img src={city6} alt="gallery-box" />
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Blog;

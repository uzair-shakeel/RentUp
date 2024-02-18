import React from 'react';
import p1 from '../images/p-1.png'
import p2 from '../images/p-2.png'
import p7 from '../images/p-7.png'
import p4 from '../images/p-4.png'
import p5 from '../images/p-5.png'
import p6 from '../images/p-6.png'
import './blog.css'

const Blog = () => {
    return (
        <div>
            <section className='blog'>
                <h1>Recent Property Listed</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <div className="box-container">
                    <div className="box">
                        <img src={p1} alt="Blog-box" />
                        <div className="text">
                            <div className="rent">
                                <span>For Rent</span>
                                <i className='fas fa-heart'></i>
                            </div>
                            <h4>Red Carpet Real Estate</h4>
                            <p><i class="fas fa-solid fa-location-dot"></i>210 Zirak Road, Canada</p>
                        </div>
                            <div className="buttons">
                                <button>$555,5</button>
                                <span>Apartment</span>
                            </div>
                    </div>
                    <div className="box">
                        <img src={p2} alt="Blog-box" />
                        <div className="text">
                            <div className="rent">
                                <span>For Rent</span>
                                <i className='fas fa-heart'></i>
                            </div>
                            <h4>Red Carpet Real Estate</h4>
                            <p><i class="fas fa-solid fa-location-dot"></i>210 Zirak Road, Canada</p>
                        </div>
                            <div className="buttons">
                                <button>$555,5</button>
                                <span>Apartment</span>
                            </div>
                    </div>
                    <div className="box">
                        <img src={p4} alt="Blog-box" />
                        <div className="text">
                            <div className="rent">
                                <span>For Rent</span>
                                <i className='fas fa-heart'></i>
                            </div>
                            <h4>Red Carpet Real Estate</h4>
                            <p><i class="fas fa-solid fa-location-dot"></i>210 Zirak Road, Canada</p>
                        </div>
                            <div className="buttons">
                                <button>$555,5</button>
                                <span>Apartment</span>
                            </div>
                    </div>
                    <div className="box">
                        <img src={p5} alt="Blog-box" />
                        <div className="text">
                            <div className="rent">
                                <span>For Rent</span>
                                <i className='fas fa-heart'></i>
                            </div>
                            <h4>Red Carpet Real Estate</h4>
                            <p><i class="fas fa-solid fa-location-dot"></i>210 Zirak Road, Canada</p>
                        </div>
                            <div className="buttons">
                                <button>$555,5</button>
                                <span>Apartment</span>
                            </div>
                    </div>
                    <div className="box">
                        <img src={p6} alt="Blog-box" />
                        <div className="text">
                            <div className="rent">
                                <span>For Rent</span>
                                <i className='fas fa-heart'></i>
                            </div>
                            <h4>Red Carpet Real Estate</h4>
                            <p><i class="fas fa-solid fa-location-dot"></i>210 Zirak Road, Canada</p>
                        </div>
                            <div className="buttons">
                                <button>$555,5</button>
                                <span>Apartment</span>
                            </div>
                    </div>
                    <div className="box">
                        <img src={p7} alt="Blog-box" />
                        <div className="text">
                            <div className="rent">
                                <span>For Rent</span>
                                <i className='fas fa-heart'></i>
                            </div>
                            <h4>Red Carpet Real Estate</h4>
                            <p><i class="fas fa-solid fa-location-dot"></i>210 Zirak Road, Canada</p>
                        </div>
                            <div className="buttons">
                                <button>$555,5</button>
                                <span>Apartment</span>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;

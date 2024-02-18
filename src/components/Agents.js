import React from 'react';
import team1 from '../images/team-1.jpg'
import team2 from '../images/team-2.jpg'
import team3 from '../images/team-3.jpg'
import team4 from '../images/team-4.jpg'
import team5 from '../images/team-5.jpg'
import team6 from '../images/team-6.jpg'
import './agents.css'

const Agents = () => {
    return (
        <div>
            <section className='agents'>
                <h1>Our Featured Agents</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                <div className="box-container">
                    <div className="box">
                        <button className="btn"> 50 Listings </button>
                        <div className="details">
                            <div className="img">
                                <img src={team1} alt="" />
                                <i class="fas fa-solid fa-circle-check"></i>
                            </div>

                            <label> <i class="fas fa fa-location-dot"></i>Liverpool, Canada</label>
                            <h4>Sargam S. Singh</h4>

                            <ul>
                                <li><i class="fa fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa fa-brands fa-linkedin"></i></li>
                                <li><i class="fa fa-brands fa-twitter"></i></li>
                                <li><i class="fa fa-brands fa-instagram"></i></li>
                            </ul>
                            <div className="buttons">
                                <button><i class="fas fa-envelope"></i>Message</button>
                                <button className='callbtn'><i class="fa fa-phone-alt"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <button className="btn"> 30 Listings </button>
                        <div className="details">
                            <div className="img">
                                <img src={team2} alt="" />
                                <i class="fas fa-solid fa-circle-check"></i>
                            </div>

                            <label> <i class="fas fa fa-location-dot"></i>Montreal, Canada</label>
                            <h4>Harijeet M. Siller</h4>

                            <ul>
                                <li><i class="fa fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa fa-brands fa-linkedin"></i></li>
                                <li><i class="fa fa-brands fa-twitter"></i></li>
                                <li><i class="fa fa-brands fa-instagram"></i></li>
                            </ul>
                            <div className="buttons">
                                <button><i class="fas fa-envelope"></i>Message</button>
                                <button className='callbtn'><i class="fa fa-phone-alt"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <button className="btn"> 70 Listings </button>
                        <div className="details">
                            <div className="img">
                                <img src={team3} alt="" />
                                <i class="fas fa-solid fa-circle-check"></i>
                            </div>

                            <label> <i class="fas fa fa-location-dot"></i>Denever, USA</label>
                            <h4>Anna K. Young</h4>

                            <ul>
                                <li><i class="fa fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa fa-brands fa-linkedin"></i></li>
                                <li><i class="fa fa-brands fa-twitter"></i></li>
                                <li><i class="fa fa-brands fa-instagram"></i></li>
                            </ul>
                            <div className="buttons">
                                <button><i class="fas fa-envelope"></i>Message</button>
                                <button className='callbtn'><i class="fa fa-phone-alt"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <button className="btn"> 20 Listings </button>
                        <div className="details">
                            <div className="img">
                                <img src={team4} alt="" />
                                <i class="fas fa-solid fa-circle-check"></i>
                            </div>

                            <label> <i class="fas fa fa-location-dot"></i>Montreal, Canada</label>
                            <h4>Harijeet M. Siller</h4>

                            <ul>
                                <li><i class="fa fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa fa-brands fa-linkedin"></i></li>
                                <li><i class="fa fa-brands fa-twitter"></i></li>
                                <li><i class="fa fa-brands fa-instagram"></i></li>
                            </ul>
                            <div className="buttons">
                                <button><i class="fas fa-envelope"></i>Message</button>
                                <button className='callbtn'><i class="fa fa-phone-alt"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <button className="btn"> 45 Listings </button>
                        <div className="details">
                            <div className="img">
                                <img src={team5} alt="" />
                                <i class="fas fa-solid fa-circle-check"></i>
                            </div>

                            <label> <i class="fas fa fa-location-dot"></i>Montreal, USA</label>
                            <h4>Adam K. Jollio</h4>

                            <ul>
                                <li><i class="fa fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa fa-brands fa-linkedin"></i></li>
                                <li><i class="fa fa-brands fa-twitter"></i></li>
                                <li><i class="fa fa-brands fa-instagram"></i></li>
                            </ul>
                            <div className="buttons">
                                <button><i class="fas fa-envelope"></i>Message</button>
                                <button className='callbtn'><i class="fa fa-phone-alt"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <button className="btn"> 80 Listings </button>
                        <div className="details">
                            <div className="img">
                                <img src={team6} alt="" />
                                <i class="fas fa-solid fa-circle-check"></i>
                            </div>

                            <label> <i class="fas fa fa-location-dot"></i>2272 Briarwood Drive</label>
                            <h4>Michael P. Grimaldo</h4>

                            <ul>
                                <li><i class="fa fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa fa-brands fa-linkedin"></i></li>
                                <li><i class="fa fa-brands fa-twitter"></i></li>
                                <li><i class="fa fa-brands fa-instagram"></i></li>
                            </ul>
                            <div className="buttons">
                                <button><i class="fas fa-envelope"></i>Message</button>
                                <button className='callbtn'><i class="fa fa-phone-alt"></i></button>
                            </div>
                        </div>

                </div>
                </div>
            </section>
        </div>
    );
}

export default Agents;

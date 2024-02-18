import React from 'react';
import './pricing.css'

const Pricing = () => {
    return (
        <div>
            <section className='pricing'>
                <h1>Select Your Package</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <div className="box-container">
                    <div className="box">
                        <h3>Basic</h3>
                        <h1><span>$</span>49</h1>
                        <p>per user, per month</p>
                        <ul>
                            <li><label><i class="fa-solid fa-check"></i></label><p>99.5% Uptime Guarantee</p></li>
                            <li><label><i class="fa-solid fa-check"></i></label><p>120GB CDN Bandwidth</p></li>
                            <li><label><i class="fa-solid fa-check"></i></label><p>5GB Cloud Storage</p></li>
                            <li><label><i class="fa-solid fa-x red"></i></label><p>Personal Help Support</p></li>
                            <li><label><i class="fa-solid fa-x red"></i></label><p>Enterprise SLA</p></li>
                        </ul>
                        <button>Start basic</button>
                    </div>
                    <div className="box">
                        <button className='best-btn'>Best Value</button>
                        <h3>Standard</h3>
                        <h1><span>$</span>30</h1>
                        <p>per user, per month</p>
                        <ul>
                            <li><label><i class="fa-solid fa-check"></i></label><p>99.5% Uptime Guarantee</p></li>
                            <li><label><i class="fa-solid fa-check"></i></label><p>120GB CDN Bandwidth</p></li>
                            <li><label><i class="fa-solid fa-check"></i></label><p>5GB Cloud Storage</p></li>
                            <li><label><i class="fa-solid fa-x"></i></label><p>Personal Help Support</p></li>
                            <li><label><i class="fa-solid fa-x red"></i></label><p>Enterprise SLA</p></li>
                        </ul>
                        <button className='btn'>Start basic</button>
                    </div>
                    <div className="box">
                        <h3>Platinum</h3>
                        <h1><span>$</span>67</h1>
                        <p>2 user, per month</p>
                        <ul>
                            <li><label><i class="fa-solid fa-check"></i></label><p>99.5% Uptime Guarantee</p></li>
                            <li><label><i class="fa-solid fa-check"></i></label><p>120GB CDN Bandwidth</p></li>
                            <li><label><i class="fa-solid fa-check"></i></label><p>5GB Cloud Storage</p></li>
                            <li><label><i class="fa-solid fa-x"></i></label><p>Personal Help Support</p></li>
                            <li><label><i class="fa-solid fa-x"></i></label><p>Enterprise SLA</p></li>
                        </ul>
                        <button>Start basic</button>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Pricing;

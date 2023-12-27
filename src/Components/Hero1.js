import React from 'react'
import './assets/css/hero.css'
import img1 from './assets/img/herohouse.png'
import { Link } from 'react-router-dom'

export default function Hero1() {
    return (
        <section>
            <div className="mainhero">
                <div className="parenthero">
                    <div className="logoparent">
                        <div className="herologosection">
                            <img src={img1} alt='' width='625' height='399' />
                        </div>
                    </div>
                    <div className="searchparent">
                        <div className="searchsection">
                            <div className="searchcity">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type='text' placeholder='Enter City' />
                            </div>
                            <div className="flatbhk">
                                <i class="fa-solid fa-house"></i>
                                {/* <div className="flatbhkdropdown">
                                    <label>Flat</label>
                                    <label className='arrowsign'>▼</label>
                                    <div className="content">
                                        <a href='#'>1 Bhk</a>
                                        <a href='#'>2 Bhk</a>
                                        <a href='#'>3 Bhk</a>
                                        <a href='#'>4 Bhk</a>
                                        <a href='#'>5 Bhk</a>
                                        <a href='#'>5+ Bhk</a>
                                    </div>
                                </div> */}
                                <select name="" id="">
                                    <option value="0">1 Bhk</option>
                                    <option value="0">2 Bhk</option>
                                    <option value="0">3 Bhk</option>
                                    <option value="0">4 Bhk</option>
                                    <option value="0">5 Bhk</option>
                                    <option value="0">5+ Bhk</option>
                                </select>
                            </div>
                            <div className="flatbhk">
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                {/* <div className="flatbhkdropdown">
                                    <label>Budget</label>
                                    <label className='arrowsign'>▼</label>
                                    <div className="content">
                                    </div>
                                </div> */}
                                <select name="" id="">
                                    <option href='#'>Below ₹20Lac</option>
                                    <option href='#'>₹20Lac - ₹40Lac</option>
                                    <option href='#'>₹40Lac - ₹60Lac</option>
                                    <option href='#'>₹60Lac - ₹80Lac</option>
                                    <option href='#'>₹80Lac - ₹1Cr</option>
                                    <option href='#'>₹1Cr +</option>
                                </select>
                            </div>
                            <div className="searchpropertybtn">
                                <Link to='/propertylist'>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <button>
                                        Search
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

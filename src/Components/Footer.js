import React from 'react'
import './assets/css/footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <section>
            <div className="mainfooter">
                <div className="parentfooter">
                    <div className="footerfirstchild">
                        <div className="footerslogan">
                            <label>BUY YOUR DREAM HOME TODAY</label>
                        </div>
                        <div className="footerlist1">
                            <div className="listcontainer">
                                <div className="listhead">
                                    <label><b>Explore</b></label>
                                </div>
                                <div className="listitems">
                                    <ul>
                                        <li><Link to='/myprofile/accountinfo'>My profile</Link></li>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/about'>About</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                        <li><Link to='/propertylist'>Properties</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dividingline"></div>
                    <div className="footersecondchild">
                        <div className="newslettersection">
                            <div className="newshead">
                                <label>Let's Stay Connected</label>
                                <p>Enter your email for our daily newsletter</p>
                            </div>
                            <div className="newsemail">
                                <input type='text' placeholder='Your Email'></input>
                                <div className="submitbutton">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="socialmediasection">
                            <div className="socialmediachild">
                                <div className="socialmediahead">
                                    <p>Follow us</p>
                                </div>
                                <div className="socialmediaicons">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-pinterest"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

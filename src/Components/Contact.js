import React from 'react'
import './assets/css/contact.css'

export default function Contact() {
    return (
        <section>
            <div className="contactcontainer">
                <div className="contactparentcontainer">
                    <div className="contactcontainerleft">
                        <img src="https://img.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg" alt="" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                    </div>
                    <div className="contactcontainerright">
                        <div className="contacthead">
                            <p>Contact Us</p>
                        </div>
                        <div className="contactform">
                            <div className="contactformchildcontainer">
                                <div className="contactformchildleftcontainer">
                                    <input type="text" name="" id="" placeholder='Your Name' />
                                    <input type="text" name="" id="" placeholder='Your Email' />
                                    <input type="text" name="" id="" placeholder='Message' />
                                    <div className="contactformchildsubmitbtbn">
                                        <p>Submit</p>
                                    </div>
                                </div>
                                <div className="contactformchildrightcontainer">
                                    <div className="contactemailcontainer">
                                        <p>Contact<br />
                                            <span>youremail@domain.com</span></p>
                                    </div>
                                    <div className="contactemailcontainer">
                                        <p>Based in<br />
                                            <span>Mumbai,India</span></p>
                                    </div>
                                    <div className="contactsocialmedialogos">
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
            </div>
        </section>
    )
}

import React, { useRef, useState } from 'react'
import './assets/css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [navbarbg, setNavbarbg] = useState(false);
    const [navbarcolor, setNavbarcolor] = useState(false);

    const changebg = () => {
        if (window.scrollY >= 80) {
            setNavbarbg(true)
            setNavbarcolor(true)
        }
        else {
            setNavbarbg(false)
            setNavbarcolor(false)
        }
    }

    window.addEventListener('scroll', changebg);

    const wrapper = useRef(null);
    const overlay = useRef(null);

    return (
        <section>
            <div className="navContainer " >
                <div className={navbarbg ? 'navParent active' : 'navParent'}>
                    <div className="navLogo ">
                        <i class="fa-solid fa-house"></i>
                    </div>

                    <div className="optionList">
                        <div className="navListitems ">
                            <li><Link id={navbarcolor ? 'activee' : 'item'} to='/'>HOME</Link></li>
                            <li><Link id={navbarcolor ? 'activee' : 'item'} to='/about'>ABOUT</Link></li>
                            <li><Link id={navbarcolor ? 'activee' : 'item'} to='contact'>CONTACT</Link></li>
                            <li><Link id={navbarcolor ? 'activee' : 'item'} to='/propertylist'>PROPERTIES</Link></li>
                        </div>
                        <div className="loginbtn">
                            <div className="loginbtnchild" onClick={() => { wrapper.current.classList.add('active-popup'); overlay.current.classList.add('overlay'); }} >
                                <label style={{ cursor: 'pointer' }}>Login</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" ref={overlay}>

                </div>
                <div className="wrapper " ref={wrapper}>
                    <span className="icon-close" onClick={() => { wrapper.current.classList.remove('active-popup'); overlay.current.classList.remove('overlay'); }}>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                    <div className="form-box login">
                        <h2>Login</h2>
                        <form action="">
                            <div className="input-box">
                                <span className="icon"><i class="fa-regular fa-envelope"></i></span>
                                <input type="text" required='true' />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i class="fa-solid fa-key"></i></span>
                                <input type="password" required='true' />
                                <label>Password</label>
                            </div>
                            <div className="remember-forgot">
                                <div className="remember">
                                    <input type="checkbox" /><label>Remember me</label>
                                </div>
                                <a href='#'>Forgot Password?</a>
                            </div>
                            <button className='loginformbtn' type="submit">Login</button>
                            <div className="login-register">
                                <p>Don't have an account ?<a href='#' onClick={() => { wrapper.current.classList.add('active'); }} className='register-link'>Register</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="form-box register">
                        <h2>Register</h2>
                        <form action="">
                            <div className="input-box">
                                <span className="icon"><i class="fa-regular fa-user"></i></span>
                                <input type="text" required='true' />
                                <label>Username</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i class="fa-regular fa-envelope"></i></span>
                                <input type="text" required='true' />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i class="fa-solid fa-key"></i></span>
                                <input type="password" required='true' />
                                <label>Password</label>
                            </div>
                            <div className="remember-forgot">
                                <div className="remember">
                                    <input type="checkbox" /><label>I agree to terms and conditions</label>
                                </div>
                            </div>
                            <button className='loginformbtn' type="submit">Register</button>
                            <div className="login-register">
                                <p>Already have an account?<a href='#' onClick={() => { wrapper.current.classList.remove('active') }} className='login-link'>Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

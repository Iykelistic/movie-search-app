import React from 'react';
import './Landing.css';

export default function Landing() {
    
    return(
        <div>
        <div className="container">
            <div className="container__text">
            <h6>Welcome to my movie search page!</h6>
                <form>
                    <label>
                        <input type="text" placeholder="Enter your email"></input>
                    </label>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>

        <div className="footer">
            <div className="main-content">
                <div className="left box">
                    <h2>About us</h2>
                    <div className="content">
                    <p>Welcome to my movie search App!. Your number one trending App for movie search, 
                        don't worry, we are taking over Netflix!LOL.</p>
                    <div className="social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div>
                    </div>
                </div>
                <div className="center box">
                    <h2>Address</h2>
                <div className="content">
                    <div className="place">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="text">Bucknor Estate, Isolo, Lagos</span>
                    </div>
                    <div className="phone">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span className="text">01-27-3001</span>
                    </div>
                    <div className="email">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="text">info@moviesearch.com</span>
                    </div>
                </div>
                </div>
                <div className="right box">
                    <h2>Contact us</h2>
                    <div className="content">
                        <form action="#">
                            <div className="email">
                                <label className="text" htmlfor="email">Email *</label>
                                <input type="email" id="email" required></input>
                            </div>
                            <div className="msg">
                                <label className="text" htmlfor="message">Message *</label>
                                <textarea name="name" rows="2" cols="25" id="message" required></textarea>
                            </div>
                            <div className="btn">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>

        </div>
        
               
    )
}

import React from 'react';

export default function Navbar() {
    return (
        <section className="nav">
            <div className="container">
                <div>
                   <a href=""><h1 className="logo">mLearnr <span>Tutor</span></h1></a>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Join Us</a>
                        </li>
                        <li>
                            <a href="">Classes</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="">
                        <button className="primary_btn">Get Started</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
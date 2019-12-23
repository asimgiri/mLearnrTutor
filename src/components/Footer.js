import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div>
                    <ul>
                        <li className="subtitle bold">
                            <Link to="/">About</Link>
                        </li>
                        <li className="subtitle bold">
                            <Link to="/">Tutors</Link>
                        </li>
                        <li className="subtitle bold">
                            <Link to="/">Terms and Conditions</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to=""><i className="fab fa-youtube"></i></Link></li>
                        <li><Link to=""><i className="fab fa-google"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
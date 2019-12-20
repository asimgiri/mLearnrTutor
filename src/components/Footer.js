import React from 'react';

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div>
                    <ul>
                        <li className="subtitle bold"><a href="">About</a></li>
                        <li className="subtitle bold"><a href="">Tutors</a></li>
                        <li className="subtitle bold"><a href="">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href=""><i className="fab fa-facebook"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li><a href=""><i className="fab fa-youtube"></i></a></li>
                        <li><a href=""><i className="fab fa-google"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
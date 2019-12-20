import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);

    const onClickHandler = () => {
        setToggleNav(!toggleNav)
    }

    return (
        <>
            <section className="nav">
                <div className="container">
                    <div>
                        <NavLink exact to="/"><h1 className="logo">mLearnr <span>Tutor</span></h1></NavLink>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="joinus" activeClassName="active">Join Us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="classes" activeClassName="active">Classes</NavLink>
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
            <div className="close">
                <i className={`fas ${toggleNav ? 'fa-times' : 'fa-bars'}`} onClick={onClickHandler}></i>
            </div>

            {toggleNav
                ? (
                    <section className="mobile_nav">
                        <ul>
                            <li>
                                <a href=""><h1 className="logo">mLearnr <span>Tutor</span></h1></a>
                            </li>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Join Us</a>
                            </li>
                            <li>
                                <a href="">Classes</a>
                            </li>
                            <li>
                                <a href="">
                                    <button className="primary_btn">Get Started</button>
                                </a>
                            </li>
                        </ul>
                    </section>
                ) : (
                    null
                )}
        </>
    )
}
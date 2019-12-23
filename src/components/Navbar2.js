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
                                <NavLink exact to="/"><h1 className="logo">mLearnr <span>Tutor</span></h1></NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/joinus">Join Us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/classes">Classes</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">
                                    <button className="primary_btn">Get Started</button>
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                ) : (
                    null
                )}
        </>
    )
}
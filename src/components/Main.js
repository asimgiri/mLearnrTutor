import React from 'react';
import TutorCardList from './TutorCardList';

export default function Main(props) {
    return (
        <section className="main">
            <div className="container">
                <TutorCardList />
            </div>
            <div className="hero_img">
                <img src="/assets/hero.png" alt="" width="100%" height="100%" />
            </div>
        </section>
    )
}
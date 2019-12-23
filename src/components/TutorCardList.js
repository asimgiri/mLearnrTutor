import React from 'react';

import { tutDetails } from './Dummy';

import TutorCard from './TutorCard';

import Slider from 'react-slick';

export default function TutorCardList() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    variableWidth: true,
                }
            },
        ]
    };

    return (
        <div className="tutor_list">
            <h1 className="hero_title">Hire the right <span className="text_primary">tutor</span> today</h1>
            <Slider {...settings}>
                {tutDetails.map((value, index) => {
                    return (
                        <TutorCard
                            key={index}
                            imgSrc={value.imgSrc}
                            name={value.name}
                            designation={value.designation}
                            list1={value.list1}
                            list2={value.list2}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}
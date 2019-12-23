import React from 'react';

export default function Setup(props) {
    return (
        <div className="setup">
            <h2>{props.title} <br /><span>{props.hero}</span></h2>
            <p className="text_gray">{props.subtitle}</p>
        </div>
    )
}
import React from 'react';

export default function TutorCard(props) {
    return (
        <div className="tutor_card">
            <div className="top">
                <div className="img_holder">
                    <img src={props.imgSrc} alt="" width="100%" height="100%" />
                </div>
                <div>
                    <h4>{props.name}</h4>
                    <p className="subtitle text_gray">{props.designation}</p>
                </div>
            </div>
            <div className="details">
                <p className="subtitle bold">Details:</p>
                <p className="subtitle text_gray">Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li className="subtitle text_gray">{props.list1}</li>
                    <li className="subtitle text_gray">{props.list2}</li>
                </ul>
            </div>
        </div>
    )
}
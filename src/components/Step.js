import React from 'react';

export default function Step() {
    return (
        <div className="step">
            <div>
                <div className="bubble">
                    <i className="fas fa-check"></i>
                </div>
                <p className="subtitle text_gray">Account Type</p>
            </div>
            <div className="two">
                <div className="bubble">
                </div>
                <p className="subtitle text_gray">Basic Info</p>
            </div>
            <div className="three">
                <div className="bubble">
                </div>
                <p className="subtitle text_gray">Invite Contacts</p>
            </div>
        </div>
    )
}
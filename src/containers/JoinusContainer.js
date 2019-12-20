import React from 'react';
import Setup from '../components/Setup';

import { setup } from '../components/Dummy';
import Step from '../components/Step';

export default function JoinusContainer() {
    return (
        <>
            <section className="main joinus">
                <div className="container">
                    <h2 className="text_center spacing_md text_gray">Help us setup your account</h2>
                    <div className="row">
                        {setup.map((value, index) => {
                            return (
                                <Setup
                                    title={value.title}
                                    hero={value.hero}
                                    subtitle={value.subtitle}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <Step />
        </>
    )
}
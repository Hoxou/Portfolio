import * as React from 'react';
import Profilename from '../profile/Profilename';
import Profileabout from '../profile/Profileabout';
import Profileskills from '../profile/Profileskills';
import Profilecontact from '../profile/Profilecontact';
import Profileworkexp from '../profile/Profileworkexp';
import Education from '../profile/Education';

export default function Container() {
    const containerStyle: React.CSSProperties = {
        width: '60%',
        height: 'auto',
        margin: 'auto',
        paddingTop: '50px',
    }

    return (
        <div style={containerStyle}>
            <Profilename />
            <Profilecontact />
            <Profileskills />
            <Profileabout />
            <Profileworkexp />
            <Education />
        </div>
    );
}
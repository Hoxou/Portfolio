import * as React from 'react';
import Profilename from '../profile/Profilename';
import Profileabout from '../profile/Profileabout';
import profileSkills from '../profile/Profileskills';
import Profileskills from '../profile/Profileskills';

export default function Container() {
    const containerStyle: React.CSSProperties = {
        width: '50%',
        height: 'auto',
        margin: 'auto',
        paddingTop: '15px',
    }

    return (
        <div style={containerStyle}>
            <Profilename />
            <Profileskills />
            <Profileabout />
        </div>
    );
}
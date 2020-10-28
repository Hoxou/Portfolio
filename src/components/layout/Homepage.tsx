import * as React from 'react';
import Profiledetails from '../profile/Profiledetails';
import Bg from '../../assets/bg.jpg';

export default function Homepage() {
    const Bgstyle: React.CSSProperties = {
        position: 'absolute',
        height: '100vh',
        width: '100%',
        margin: '0 auto',
        backgroundImage: 'url(' + Bg + ')',
        backgroundSize: '100% auto'

    }
    return (
        <div style={Bgstyle}>
            <Profiledetails />
        </div>
    );
}

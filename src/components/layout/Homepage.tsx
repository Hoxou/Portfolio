import * as React from 'react';
import Container from './Container';
import Bg from '../../assets/nodejs.jpg';

export default function Homepage() {
    const Bgstyle: React.CSSProperties = {
        position: 'absolute',
        width: '100%',
        margin: '0 auto',
        //backgroundImage: 'url(' + Bg + ')',
        backgroundSize: '100% auto',
        backgroundAttachment: 'fixed'

    }
    return (
        <div style={Bgstyle}>
            <Container />
        </div>
    );
}

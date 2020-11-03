import * as React from 'react';
import Container from './Container';
import Bg from '../../assets/bg3.jpg';

export default function Homepage() {
    const Bgstyle: React.CSSProperties = {
        position: 'absolute',
        margin: '0 auto',
        backgroundImage: 'url(' + Bg + ')',
        backgroundSize: '100% auto',
        backgroundAttachment: 'fixed'

    }
    return (
        <div style={Bgstyle}>
            <Container />
        </div>
    );
}

import * as React from 'react';

export default function Profileabout() {

    const h3Style: React.CSSProperties = {
        fontFamily: 'Orbitron',
        fontSize: '24px',
        color: '#fff',
        paddingLeft: '10px',
        borderLeft: '5px solid #0B56C7'

    }

    const pStyle: React.CSSProperties = {
        color: '#fff',
        fontSize: '17px',
        textAlign: 'justify',
        textShadow: '1px 1px 5px black',
        marginBottom: '50px'
    }

    const profileaboutStyle: React.CSSProperties = {
        marginBottom: '50px'
    }

    return (
        <div style={profileaboutStyle}>
            <h3 style={h3Style}><i>About me</i></h3>
            <p style={pStyle}>
                Since I started to learn Chinese by myself in 2016, I always wanted to live in Taiwan.
                To do so, I have worked hard in France for 8 months to be able to pursue my dream.
                I studied various different professional fields in the past and took the best of each of them.
                I am a serious and ambitious person who loves challenges, therefore I am open toany kind of job propositions.
            </p>
            <iframe
                width='100%'
                height="515"
                src="https://www.youtube.com/embed/pfXem9xoCzA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </div>
    );
}
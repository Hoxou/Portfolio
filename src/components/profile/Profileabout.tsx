import * as React from 'react';
import Title from '../utils/Title';

export default function Profileabout() {

    const pStyle: React.CSSProperties = {
        color: '#e3e3e3',
        fontSize: '17px',
        textAlign: 'justify',
        marginBottom: '50px',
        fontFamily: 'Lato'
    }

    const profileaboutStyle: React.CSSProperties = {

    }

    return (
        <div style={profileaboutStyle}>
            <Title label="About me" />
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
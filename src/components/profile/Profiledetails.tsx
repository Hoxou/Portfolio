import * as React from 'react';
import { transform } from 'typescript';
import profilePic from '../../assets/profilepic.jpg';

export default function Profiledetails() {
    const profiledetailsStyle: React.CSSProperties = {
        width: '50%',
        height: '266px',
        margin: 'auto',
        marginTop: '20%',
        border: '1px solid black',
        display: 'flex'
    }

    const profilepicStyle: React.CSSProperties = {
        width: '250px',
        height: '250px',
        borderRadius: '100%',
        border: '8px solid darkblue'
    }

    const profilepicHover: React.CSSProperties = {
        transform: 'scale(' + 1.5 + ')'
    }

    return (
        <div style={profiledetailsStyle}>
            <img
                style={profilepicStyle}
                src={profilePic}
                alt='profile_picture'
            />
            <Details />
        </div>
    );
}
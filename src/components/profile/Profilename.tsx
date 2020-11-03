import * as React from 'react';
import profilePic from '../../assets/profilepic.jpg';


export default function Profilename() {

    const profilepicStyle: React.CSSProperties = {
        width: '45%',
        maxWidth: '150px',
        height: '45%',
        borderRadius: '100%',
        border: '8px solid #0B56C7'
    }
    const nameStyle: React.CSSProperties = {
        marginLeft: '5%',
        borderLeft: '8px solid #0B56C7',
        paddingLeft: '5%',
        fontSize: '50px',
        fontFamily: 'Lato',
        letterSpacing: '2px',
        color: '#fff',
    }
    const profilenameStyle: React.CSSProperties = {
        alignSelf: 'auto',
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div style={profilenameStyle}>
            <img
                style={profilepicStyle}
                src={profilePic}
                alt='profile_picture'
            />
            <div style={nameStyle}>
                Victor Toupar
            </div>
        </div>
    );
}
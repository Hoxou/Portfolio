import * as React from 'react';
import profilePic from '../../assets/profilepic.jpg';


export default function Profilename() {

    const profilepicStyle: React.CSSProperties = {
        width: '150px',
        height: '150px',
        borderRadius: '100%',
        border: '8px solid #0B56C7'
    }
    const nameStyle: React.CSSProperties = {
        marginLeft: '45px',
        borderLeft: '8px solid #0B56C7',
        paddingLeft: '50px',
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
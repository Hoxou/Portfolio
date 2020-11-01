import * as React from 'react';

interface EducationPropss {
    Title: String,
    School: String,
    Date: String
}
export default function EducationProps(props: EducationPropss) {

    const titleStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff',
        borderBottom: '3px solid #0B56C7',
        marginBottom: '10px'

    }
    const schoolStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
        fontStyle: 'italic'
    }
    const dateStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
        fontStyle: 'italic',
        marginBottom: '65px'
    }
    return <>
        <div style={titleStyle}>{props.Title}</div>
        <div style={schoolStyle}>{props.School}</div>
        <div style={dateStyle}>{props.Date}</div>
    </>
}
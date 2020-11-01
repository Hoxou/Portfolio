import * as React from 'react';

interface TitleProps {
    label: string
}

export default function Title(props: TitleProps) {

    const h3Style: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: '24px',
        color: '#fff',
        paddingLeft: '10px',
        borderLeft: '5px solid #0B56C7',
        marginTop: 70
    }

    return (
        <h3 style={h3Style}>{props.label}</h3>
    )
}
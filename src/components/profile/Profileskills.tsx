import { wrap } from 'module';
import * as React from 'react';
import SkillBar from 'react-skillbars';

export default function Profileskills() {
    const Computerskills = [
        {
            type: "HTML/CSS",
            level: 95,
            color: {
                title: {
                    background: '#0f4c75'
                }
            }
        },
        {
            type: "PHP/JS",
            level: 75,
            color: {
                title: {
                    background: '#0f4c75'
                }
            }
        },
        {
            type: "React.js",
            level: 50,
            color: {
                title: {
                    background: '#0f4c75'
                }
            }
        },
        {
            type: "Git/Github",
            level: 95,
            color: {
                title: {
                    background: '#0f4c75'
                }
            }
        },
        {
            type: "C/C#",
            level: 90,
            color: {
                title: {
                    background: '#0f4c75'
                }
            }
        }

    ]

    const Languagesskills = [
        {
            type: "French",
            level: 100,
            color: {
                title: {
                    background: '#0f4c75'
                },
            }
        },
        {
            type: "English",
            level: 95,
            color: {
                title: {
                    background: '#0f4c75'
                },
            }
        },
        {
            type: "Chinese",
            level: 65,
            color: {
                title: {
                    background: '#0f4c75'
                },
            }
        }
    ],
        colors =
        {
            "bar": {
                "hue": 210,
                "saturation": 80,
                "level": {
                    "minimum": 60,
                    "maximum": 80
                }
            }
        }

    const profileskillsStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const h3Style: React.CSSProperties = {
        fontFamily: 'Orbitron',
        fontSize: '24px',
        color: '#fff',
        paddingLeft: '10px',
        borderLeft: '5px solid #0B56C7'
    }

    const skillcategoryStyle: React.CSSProperties = {
        flexBasis: '400px',
    }

    return (
        <div style={profileskillsStyle}>
            <div style={skillcategoryStyle}>
                <h3 style={h3Style}>Computer Skills</h3>
                <SkillBar skills={Computerskills} colors={colors} />
            </div>
            <div style={skillcategoryStyle}>
                <h3 style={h3Style}>Languages Skills</h3>
                <SkillBar skills={Languagesskills} colors={colors} />
            </div>
        </div>
    );
}
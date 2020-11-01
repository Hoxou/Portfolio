import * as React from 'react';
import SkillBar from 'react-skillbars';
import Title from '../utils/Title';

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

    const skillcategoryStyle: React.CSSProperties = {
        flexBasis: '400px',
    }

    return (
        <div style={profileskillsStyle}>
            <div style={skillcategoryStyle}>
                <Title label="Computer Skills" />
                <SkillBar skills={Computerskills} colors={colors} />
            </div>
            <div style={skillcategoryStyle}>
                <Title label="Language skills" />
                <SkillBar skills={Languagesskills} colors={colors} />
            </div>
        </div>

    );
}
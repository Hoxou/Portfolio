import * as React from 'react';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Profilecontact() {
    const ProfilecontactStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
    }
    const h3Style: React.CSSProperties = {
        fontFamily: 'Orbitron',
        fontSize: '24px',
        color: '#fff',
        paddingLeft: '10px',
        borderLeft: '5px solid #0B56C7'
    }
    const informationStyle: React.CSSProperties = {
        margin: '0 10px'
    }

    return (
        <div>
            <h3 style={h3Style}>Informations</h3>
            <div style={ProfilecontactStyle}>
                <div style={informationStyle}>
                    <Button
                        href='mailto:victor.toupar@gmail.com'
                        variant="contained"
                        color="secondary"
                        startIcon={<EmailIcon />}
                    >
                        victor.toupar@gmail.com
                    </Button>
                </div>
                <div style={informationStyle}>
                    <Button
                        href='https://liff.line.me/'
                        variant="contained"
                        color="default"
                        startIcon={<MessageIcon />}
                    >
                        Line : hauk00
                    </Button>
                </div>
                <div style={informationStyle}>
                    <Button
                        href='https://www.linkedin.com/in/victor-toupar/'
                        variant="contained"
                        color="primary"
                        startIcon={<LinkedInIcon />}
                    >
                        LinkedIn
                    </Button>
                </div>
            </div>


        </div>
    );
}
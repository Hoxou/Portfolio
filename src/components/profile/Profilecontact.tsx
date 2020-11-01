import * as React from 'react';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Title from '../utils/Title';

export default function Profilecontact() {
    const informationStyle: React.CSSProperties = {
        marginRight: '10px'
    }

    return (
        <div>
            <Title label='Informations' />
            <div >
                <Button
                    href='mailto:victor.toupar@gmail.com'
                    variant="contained"
                    color="secondary"
                    style={informationStyle}
                    startIcon={<EmailIcon />}
                >
                    victor.toupar@gmail.com
                    </Button>
                <Button
                    href='https://liff.line.me/'
                    variant="contained"
                    color="default"
                    style={informationStyle}
                    startIcon={<MessageIcon />}
                >
                    Line : hauk00
                    </Button>
                <Button
                    href='https://www.linkedin.com/in/victor-toupar/'
                    target="_blank"
                    variant="contained"
                    color="primary"
                    style={informationStyle}
                    startIcon={<LinkedInIcon />}
                >
                    LinkedIn
                    </Button>
            </div>


        </div>
    );
}
import * as React from 'react';
import EducationProps from './EducationProps';
import Title from '../utils/Title';



export default function Education() {

    const educations = [
        {
            'Title': 'BA Tourism Management (Fine Example Award)',
            'School': 'Providence University, Taiwan',
            'Date': 'Sep 2019 – Jun 2023'
        },
        {
            'Title': 'Applied Chinese (Top 3 of the whole language center)',
            'School': 'Chinese Language Center of Providence University, Taiwan',
            'Date': 'Sep 2018 – Aug 2019'
        },
        {
            'Title': 'Computer Science',
            'School': 'Gaston Berger Professional School, France',
            'Date': 'Sep 2016– Jun 2018'
        },
        {
            'Title': 'Graphic Production (High academic record)',
            'School': 'Cesar Baggio High School, France',
            'Date': 'Sep 2011 – Jul 2014'
        }

    ]
    const margintopStyle: React.CSSProperties = {
        margin: '300px 0px'
    }
    return (
        <div style={margintopStyle}>
            <Title label='Education' />
            {
                educations.map(education => {
                    return <EducationProps
                        Title={education.Title}
                        School={education.School}
                        Date={education.Date}
                    />
                })
            }
        </div>
    );
}
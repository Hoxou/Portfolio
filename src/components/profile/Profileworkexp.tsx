import * as React from 'react';
import Title from '../utils/Title';
import Experiences from './Experiences';

export default function Profileworkexp() {
    const experiences = [

        {
            'WorkPosition': 'Kitchen Aide - Part time',
            'Company': '張家麵館',
            'Date': 'Jul 2019 - Sep 2020',
            'Description': 'Preparation of ingredients, wash dishes, cook soup.'
        },
        {
            'WorkPosition': 'Video Editing, Poster and Logo Design',
            'Company': 'Independent',
            'Date': 'Jan 2020 - Now',
            'Description': 'Designed posters and logos for school events. Also did video editing for my school club and own Youtube channel.'
        },
        {
            'WorkPosition': 'Translator, French English Tutor, Model',
            'Company': 'Independent',
            'Date': 'Jan 2019 - Now',
            'Description': 'Private English tutor for young kids, Adults as well as translating documents. Also did a photoshoot for an univeristy Fashion magazine.'
        },
        {
            'WorkPosition': 'PHP Back-end Developer Intern',
            'Company': 'Nomads',
            'Date': ' Mar 2018 – May 2018',
            'Description': 'Follow up of a website creation project by developping and designing the architecture of the database, securing server-client queries and handling the modifications from the customer.'
        },
        {
            'WorkPosition': 'Kitchen Aide - Part time',
            'Company': 'Mc Donald’s',
            'Date': 'Nov 2017 – Jun 2018',
            'Description': 'Working in a worldwide known fast food chain have taught me how to work fast and under pressure while being rigourous at all time.'
        },
        {
            'WorkPosition': 'Full stack Developper Intern',
            'Company': 'Boost communication',
            'Date': ' Feb 2017 – Apr 2017',
            'Description': 'Developing a website as an autodidact for the 10 years anniversary of the agency.'
        },


    ]

    return (
        <div>
            <Title label='Work Experiences' />
            {
                experiences.map(experience => {
                    return <Experiences
                        WorkPosition={experience.WorkPosition}
                        Company={experience.Company}
                        Date={experience.Date}
                        Description={experience.Description}
                    />
                })
            }

        </div>
    );
}
import moment from 'moment'
import React from 'react'
import { IExperience } from '../types/experience'

interface IExperienceItem {
    experience: IExperience
}

export default function ExperienceItem  ({experience}: IExperienceItem) {
    return (
        <div className=''>
            <div className="">
                <p className='text-sm text-gray-500 font-medium'>{moment(experience.startdate).format('Do, MMM YYYY')} - {experience.enddate ? moment(experience.enddate).format('Do, MMM YYYY') : 'Present'}</p>
            </div>
            <div className="flex-1">
                <p className=' font-semibold'>{experience.role} - {experience.type}</p>
                <p className=' font-medium'>{experience.company}</p>
                <div>
                    <p className='text-gray-500'>{experience.description}</p>
                </div>
            </div>
        </div>
    )
}

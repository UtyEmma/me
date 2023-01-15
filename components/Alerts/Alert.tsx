import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface IAlertProps <P> extends React.ComponentProps<any> {
    as?: React.ElementType<P>
    
}

export const Alert = ({as: Element = 'a', ...props}: IAlertProps<any>) => {
    return (
        <Element className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" {...props}>
            <div className="flex items-center">
                <StarIcon className='w-6 fill-white' />
            <span>Star this project on GitHub</span>
            </div>
            <span>View more →</span>
        </Element>
    )
}

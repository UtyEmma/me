import { UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface IStatCardProps {
    title: string
    value: string | number | JSX.Element
    
    icon: JSX.Element
}

export const StatCard = ({title, icon, value} : IStatCardProps) => {
    return (
        <div className="flex items-center p-4 bg-white border shadow-xs dark:bg-gray-800">
            <div className="mr-4">
                {icon}
            </div>
            <div>
                <p className="text-md font-medium text-gray-600 dark:text-gray-400">
                    {title}
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {value}
                </p>
            </div>
        </div>
    )
}

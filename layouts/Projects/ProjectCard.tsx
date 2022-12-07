import { LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export const ProjectCard = () => {
    return (
        <div className=''>
            <div className='aspect-square bg-gray-200 relative'>

            </div>
            <div className='aspect-auto py-1 flex flex-col justify-center space-y-2'>
                <div>
                    <h3 className='font-semibold'>Leadaa Africa Ecommerce</h3>
                    <p className='text-sm mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex flex-wrap gap-1'>
                    <span className='text-xs font-semibold'>Laravel -</span>
                    <span className='text-xs font-semibold'>React -</span>
                    <span className='text-xs font-semibold'>PHP -</span>
                    <span className='text-xs font-semibold'>MySQL</span>
                </div>

                <div className='w-full flex space-x-2 justify-between'>
                    <div className='flex space-x-2'>
                        <Link href={''} className="inline-flex flex-1 text-sm bg-black font-light bg-opacity-10 p-1.5 px-5 hover:bg-opacity-25 transition-all duration-500 space-x-2">
                            <span>View Project</span> 
                            <LinkIcon className='w-4' /> 
                        </Link>
                        <Link href={''} className="inline-flex text-sm bg-black bg-opacity-10 p-1.5 px-2 hover:bg-opacity-25 transition-all duration-500 space-x-2">
                            <LinkIcon className='w-4' /> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

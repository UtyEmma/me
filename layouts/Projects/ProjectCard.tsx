import { LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Github from '../../components/Icons/Github'

export const ProjectCard = () => {
    return (
        <div className='md:aspect-video aspect-square bg-gray-200 relative flex flex-col justify-end group overflow-hidden'>

            <div className='aspect-auto flex flex-col justify-center space-y-2 bg-black bg-opacity-70 text-white p-5 transition-all duration-500 md:translate-y-full group-hover:translate-y-0'>
                <div>
                    <h3 className='font-semibold text-sm'>Bayof</h3>
                    {/* <p className='text-sm mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className='flex flex-wrap gap-1'>
                    <span className='text-xs font-medium'>Laravel -</span>
                    <span className='text-xs font-medium'>React -</span>
                    <span className='text-xs font-medium'>PHP -</span>
                    <span className='text-xs font-medium'>MySQL</span>
                </div>

                <div className='w-full flex space-x-2 justify-between'>
                    <div className='flex space-x-2'>
                        <Link href={''} className="inline-flex flex-1 text-sm bg-black font-light bg-opacity-10 p-1.5 px-5 hover:bg-opacity-25 transition-all duration-500 space-x-2 h-10 items-center">
                            <span>View Project</span> 
                            <LinkIcon className='w-4' /> 
                        </Link>
                        <Link href={''} className="inline-flex text-sm bg-black bg-opacity-10 p-1.5 px-2 hover:bg-opacity-25 transition-all duration-500 space-x-2 w-10 h-10">
                            {/* <LinkIcon className='w-4' />  */}
                            <Github />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

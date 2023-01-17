import { LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { text } from 'stream/consumers'
import Github from '../../components/Icons/Github'
import { IProject } from '../../types/projects'

interface IProjectCardProps {
    project: IProject
}

export const ProjectCard = ({project}: IProjectCardProps) => {
    return (
        <div className='bg-white group'>
            <div className='aspect-video bg-gray-100 relative flex group overflow-hidden '>
                <div className="p-10">
                    <img src={project.image} className="object-cover object-center drop-shadow-2xl min-w-full min-h-full group-hover:scale-105 transition-all duration-500" alt="" />
                </div>
                {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10' /> */}
            </div>
            
            <div className='aspect-auto flex flex-col justify-center space-y-2 text-black p-5 duration-500 '>
                <div>
                    <div className='flex text-xs flex-wrap gap-1'>
                        {
                            JSON.parse(project.tech).map((tech : any, i: number) => <span className='tracking-wide text-gray-500 font-semibold'>{tech.value} {JSON.parse(project.tech).length > i + 1 ? '-' : ''} </span>)
                        }                        
                    </div>
                    <h3 className='font-semibold tracking-wide'>{project.title}</h3>
                    <p className='mb-0 text-sm tracking-wide text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='w-full flex space-x-2 '>
                    <div className='flex space-x-2 '>
                        <Link href={''} className="inline-flex flex-1 text-sm bg-black font-light bg-opacity-10 p-1.5 px-10 hover:bg-opacity-25 transition-all duration-500 space-x-2 h-10 items-center">
                            <span>Visit</span> 
                            <LinkIcon className='w-4' /> 
                        </Link>
                        <Link href={''} className="inline-flex text-sm bg-black bg-opacity-10 p-1.5 px-2 hover:bg-opacity-25 transition-all duration-500 space-x-2 w-10 h-10">
                            {/* <LinkIcon className='w-4' />  */}
                            <Github fill="#00000" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

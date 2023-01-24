import { LinkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import { text } from 'stream/consumers'
import Github from '../../components/Icons/Github'
import { IProject } from '../../types/projects'

interface IProjectCardProps {
    project: IProject
}

export const ProjectCard = ({project}: IProjectCardProps) => {
    const {theme} = useTheme()
    console.log(project)

    return (
        <div className='group'>
            <div className={`aspect-video  ${theme == 'dark' ? 'bg-gray-500 bg-opacity-10' : 'bg-gray-100'} relative flex group overflow-hidden`}>
                <div className="p-10">
                    <img src={project.image} className="object-cover object-center drop-shadow-2xl min-w-full min-h-full group-hover:scale-105 transition-all duration-500" alt="" />
                </div>
            </div>
            
            <div className='aspect-auto flex flex-col justify-center space-y-2 text-black py-3 duration-500 '>
                <div>
                    <div className='flex text-xs flex-wrap gap-1'>
                        {
                            project.tech.map((tech : any, i: number) => <span key={tech} className='tracking-wide text-gray-500 font-semibold'>{tech} {project.tech.length > i + 1 ? '-' : ''} </span>)
                        }                        
                    </div>
                    <h3 className={`font-semibold tracking-wide ${theme == 'dark' ? 'text-white' : ''}`}>{project.title}</h3>
                    <p className='mb-0 text-sm tracking-wide text-gray-500'>{project.description}</p>
                </div>

                <div className='w-full flex space-x-2 '>
                    <div className='flex space-x-2 '>
                        <Link href={project.link} target={'_blank'} className={`inline-flex text-sm flex-1 bg-gray-400 font-semibold bg-opacity-10 p-1.5 px-10 hover:bg-opacity-25 transition-all duration-500 space-x-2 h-10 items-center ${theme == 'dark' ? 'text-white' : 'text-gray-600'}`}>
                            <span>Visit Project</span> 
                            {/* <LinkIcon className='w-4' />  */}
                        </Link>
                        {
                            project.github && <Link href={''} className={`inline-flex text-sm bg-gray-400 ${theme == 'dark' ? 'text-white' : 'text-gray-600'} bg-opacity-10 p-1.5 px-2 hover:bg-opacity-25 transition-all duration-500 space-x-2 w-10 h-10`}>
                            <Github fill="#00000" />
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

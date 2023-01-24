import { useTheme } from 'next-themes'
import React from 'react'
import { Footer } from '../layouts/Footer'
import { FrontLayout } from '../layouts/FrontLayout'
import { Header } from '../layouts/Header'
import ProjectCard from './partials/ProjectCard'
import { IProject } from '../types/projects'

interface IProjects {
    projects: IProject[]
}

export default function Projects({projects}: IProjects) {
    const {theme} = useTheme()
  return (
    <FrontLayout title='Utibe-Abasi Emmanuel'>
        <div className={`${theme == 'dark' ? "" : 'bg-purple-50'}`}>
            <Header title={"Utibe-Abasi Emmanuel"} />

            <div className="max-w-7xl mx-auto px-5 md:px-0 space-y-5">
                <div className='text-center flex space-x-5 my-5 md:my-10 items-center'>
                    <div className='mx-auto'>
                        <p className='text-2xl md:text-3xl  mb-0 uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent'>My Projects</p>
                        <p className='text-xl md:w-2/3 mx-auto text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed quas vel praesentium quidem veritatis mollitia tempora impedit soluta dolorum?</p>
                    </div>
                </div>
            
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        projects.filter(project => project.status === 'active').map(project => (
                            <ProjectCard project={project} key={project.id+project.status} />
                        ))
                    }
                </div>
            </div>

            <section className='mt-10'>
                <Footer />  
            </section>
        </div>
    </FrontLayout>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })

    const data = await res.json()

    const projects = data.projects
    
    return { props: { projects } }
}

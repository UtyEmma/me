import Link from 'next/link'
import React from 'react'
import { Button } from '../../../components/Buttons/Button'
import Table from '../../../components/Table/Table'
import { DashboardLayout } from '../../../layouts/Admin/DashboardLayout'
import { IProject } from '../../../types/projects'
import env from '../../../utils/env'

interface IProjectsProps {
    projects: IProject[]
}

export default function Projects({projects}: IProjectsProps) {    
    return (
        <DashboardLayout title={"Projects"}>
            <div className='mb-4 flex items-center justify-between'>
                <h2 className='text-xl text-gray-600 font-semibold'>Projects</h2>

                <Link href={'/admin/projects/edit'}>
                    <Button className='text-sm px-3 py-2'>Create Project</Button>
                </Link>
            </div>

            <div className="bg-white border p-3">
                <Table>
                    <thead >
                        <Table.Row className='font-semibold tracking-wide border-b'>
                            <Table.Cell as="th" >Project Info</Table.Cell>
                            <Table.Cell as="th">Views</Table.Cell>
                            <Table.Cell as="th">Clicks</Table.Cell>
                            <Table.Cell as="th">Status</Table.Cell>
                            <Table.Cell as="th">Created At</Table.Cell>
                            <Table.Cell as="th">Updated At</Table.Cell>
                            <Table.Cell as="th"></Table.Cell>
                        </Table.Row>
                    </thead>
                    <tbody className='divide-y'>
                        {
                            projects.map(project => (
                                <Table.Row>
                                    <Table.Cell>{project.title}</Table.Cell>
                                    <Table.Cell>{project.views}</Table.Cell>
                                    <Table.Cell>{project.clicks}</Table.Cell>
                                    <Table.Cell>{project.status}</Table.Cell>
                                    <Table.Cell>{project.createdAt}</Table.Cell>
                                    <Table.Cell>{project.updatedAt}</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </DashboardLayout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${env('APP_URL')}/api/projects/fetch`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })

    const projects = (await res.json()).projects
  
    // Pass data to the page via props
    return { props: { projects } }
}

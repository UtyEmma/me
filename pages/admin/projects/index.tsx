import Link from 'next/link'
import React from 'react'
import { Button } from '../../../components/Buttons/Button'
import Table from '../../../components/Table/Table'
import { DashboardLayout } from '../../../layouts/Admin/DashboardLayout'

export default function Projects() {
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
                            <Table.Cell>Project</Table.Cell>
                            <Table.Cell>Views</Table.Cell>
                            <Table.Cell>Clicks</Table.Cell>
                            <Table.Cell>Status</Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </thead>
                    <tbody className='divide-y'>
                        <Table.Row>
                            <Table.Cell>Web Dev for beginners</Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Web Dev for beginners</Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                        </Table.Row>
                    </tbody>
                </Table>
            </div>
        </DashboardLayout>
    )
}

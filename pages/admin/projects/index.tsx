import Link from 'next/link'
import React from 'react'
import { Button } from '../../../components/Buttons/Button'
import { DashboardLayout } from '../../../layouts/Admin/DashboardLayout'

export default function Projects() {
    return (
        <DashboardLayout title={"Projects"}>
            <div className='mb-4'>
                <Link href={'/admin/projects/edit'}>
                    <Button className='py-2 px-4'>Create Project</Button>
                </Link>
            </div>
            <table className='table border w-full'>
                <thead className='border-b'>
                    <tr className='text-sm '>
                        <th className='border p-3 w-96'>Project</th>
                        <th className='border p-3'>Views</th>
                        <th className='border p-3'>Clicks</th>
                        <th className='border p-3 w-40'>Status</th>
                        <th className='border p-3'></th>
                    </tr>
                </thead>

                <tbody className=''>
                    <tr className='text-sm'>
                        <td className='p-3 border'>Title</td>
                        <td className='p-3 border'>Views</td>
                        <td className='p-3 border'>Views</td>
                        <td className='p-3 border'>Views</td>
                    </tr>
                </tbody>
            </table>
        </DashboardLayout>
    )
}

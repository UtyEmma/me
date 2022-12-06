import Link from 'next/link'
import React from 'react'
import { DashboardLayout } from '../../layouts/Admin/DashboardLayout'
import { FrontLayout } from '../../layouts/front/FrontLayout'
import { Header } from '../../layouts/front/Header'

export default function Dashboard () {
    return (
        <DashboardLayout title="Overview" >
            <div className="grid grid-cols-3 gap-5">
                <div className="p-4 border border-black">
                    <p className='font-medium'>Site Visits</p>
                    <p className='text-3xl font-semibold'>1,200</p>
                </div>
                <div className="p-4 border border-black">
                    <p className='font-medium'>Site Visits</p>
                    <p className='text-3xl font-semibold'>1,200</p>
                </div>
                <div className="p-4 border border-black">
                    <p className='font-medium'>Site Visits</p>
                    <p className='text-3xl font-semibold'>1,200</p>
                </div>
            </div>
        </DashboardLayout>
    )
}

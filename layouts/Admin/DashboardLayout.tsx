import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { Footer } from '../front/Footer'
import { FrontLayout } from '../front/FrontLayout'
import { Header } from '../front/Header'
import { DashboardHeader } from './DashboardHeader'
import { DashboardSidebar } from './DashboardSidebar'

interface IDashboardLayout extends PropsWithChildren<any> {

}

export const DashboardLayout = ({children, title}: IDashboardLayout) => {
    return (
        <FrontLayout title='Dashboard'>
            <div className="flex min-h-full  justify-between bg-gray-50 dark:bg-gray-900">
                <DashboardSidebar />

                <div className='flex-1'>
                    <DashboardHeader />

                    <main className="container p-10 mx-auto">
                        {children}
                    </main>
                </div>
            </div>
        </FrontLayout>
    )
}

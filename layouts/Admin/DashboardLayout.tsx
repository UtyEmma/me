import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { Footer } from '../front/Footer'
import { FrontLayout } from '../front/FrontLayout'
import { Header } from '../front/Header'

interface IDashboardLayout extends PropsWithChildren<any> {

}

export const DashboardLayout = ({children, title}: IDashboardLayout) => {
    return (
        <FrontLayout title='Dashboard'>
            <div className="min-h-screen pb-10">
                <div className="flex flex-col h-full">
                    <Header title='Dashboard' />

                    <main className='max-w-6xl mx-auto px-5 w-full flex-1 grid grid-cols-4 gap-10  md:px-0 mt-10'>
                        <div className="col-1 py-4 border border-black space-y-4">
                            <div className='px-4'>
                                <h4 className='font-semibold uppercase'>Menu</h4>
                            </div>
                            
                            <hr  className='border-black'/>

                            <ul className='px-4'>
                                <Link href="/admin"  >
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Overview</li>
                                </Link>
                                <Link href="/admin/projects">
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Projects</li>
                                </Link>
                                <Link href="">
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Experience</li>
                                </Link>
                                <Link href="">
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Education</li>
                                </Link>
                                <Link href="">
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Blog Posts</li>
                                </Link>
                                <Link href="">
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Settings</li>
                                </Link>
                                <Link href="">
                                    <li className='py-3 px-2 hover:bg-black hover:text-white transition-all duration-500'>Logout</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="col-span-3 py-4 border border-black space-y-4">
                            <div className='px-4'>
                                <h4 className='font-semibold uppercase'>{title}</h4>
                            </div>
                            
                            <hr  className='border-black'/>

                            <div className="p-4">
                                {children}
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </FrontLayout>
    )
}

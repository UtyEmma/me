import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Bars2Icon, BeakerIcon, CommandLineIcon, SunIcon } from '@heroicons/react/24/outline'
import { CommandLineIcon as CommandLineIconOutline } from '@heroicons/react/24/outline'
import { Button } from '../../components/Buttons/Button'
import Link from 'next/link'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface IHeader {
    title: string
}

export const Header = ({title} : IHeader) => {

    const [showMenu, setShowMenu] = useState(false)
    
    const [parent] = useAutoAnimate()

    return (
        <header>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className='py-6 max-w-6xl mx-auto flex justify-between items-center px-5 md:px-0'>
                <Link href={'/'} className='uppercase flex space-x-1 items-center'>
                    <CommandLineIcon className='w-8' />
                    <span className='text-xl mb-0'>UtyEmma.</span>
                </Link>   

                <div className='flex space-x-4'>
                    <ul className='md:flex space-x-10 items-center font-light text-md hidden'>
                        <li className='hover:-translate-y-1 hover:font-medium transition-all duration-300'>
                            <Link href={"#projects"}>Projects</Link>
                        </li>
                        <li className='hover:-translate-y-1 hover:font-medium transition-all duration-300'>
                            <Link href={""}>Resume</Link>
                        </li>
                        <li className='hover:-translate-y-1 hover:font-medium transition-all duration-300'>
                            <Link href={""}>Blog</Link>
                        </li>
                        <li className='hover:-translate-y-1 hover:font-medium transition-all duration-300'>
                            <Link href={""}>Contact</Link>
                        </li>
                    </ul>
                    <button>
                        <SunIcon className='text-white w-8' />
                    </button>
                    <button className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
                        <Bars2Icon className='w-8' />
                    </button>
                </div>
            </nav>

            <div ref={parent as any}>
                {
                    showMenu

                    &&

                    <div className='md:hidden block'>
                        <div className="fixed transition-all duration-500 text-black bottom-0 z-50 right-0 left-0 top-0 bg-white px-10 flex flex-col items-center justify-center">
                            <div className='border-b py-3 w-full'>
                                <p className='text-center uppercase text-2xl'>Menu</p>
                            </div>

                            <div className="w-full flex-1 flex items-center justify-center">
                                <ul>
                                    <li className='text-center p-5 transition-all duration-300 hover:text-3xl py-3 text-2xl'>Home</li>
                                    <li className='text-center p-5 transition-all duration-300 hover:text-3xl py-3 text-2xl'>About Me</li>
                                    <li className='text-center p-5 transition-all duration-300 hover:text-3xl py-3 text-2xl'>Projects</li>
                                    <li className='text-center p-5 transition-all duration-300 hover:text-3xl py-3 text-2xl'>Blog</li>
                                    <li className='text-center p-5 transition-all duration-300 hover:text-3xl py-3 text-2xl'>Contact</li>
                                </ul>
                            </div>

                            <div className='border-t py-5 w-full'>
                                <Button onClick={() => setShowMenu(!showMenu)} className='w-full bg-transparent border-black text-black hover:bg-black'>Close</Button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

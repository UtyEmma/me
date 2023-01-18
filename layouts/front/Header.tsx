import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Bars2Icon, BeakerIcon, CommandLineIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
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
    const [btn] = useAutoAnimate()


    return (
        <header className='relative'>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav ref={parent as any} className='py-6 max-w-7xl mx-auto  z-50'>
                <div className='flex justify-between items-center px-5 md:px-0'>
                    <Link href={'/'} className='uppercase flex bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500 text-transparent  space-x-1 items-center '>
                        <CommandLineIcon className='w-8 text-purple-700' />
                        <span className='text-2xl font-medium  tracking-wide'>UtyEmma.</span>
                    </Link>   

                    <div className='flex space-x-4'>
                        <ul className='md:flex space-x-10 items-center font-light text-md hidden'>
                            <li className='hover:-translate-y-1 hover:font-medium transition-all duration-300'>
                                <Link href={"#projects"}>Projects</Link>
                            </li>
                            <li className='hover:-translate-y-1 hover:font-medium  transition-all duration-300'>
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
                            <SunIcon className=' w-8' />
                        </button>
                        <button ref={btn as any} className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <XMarkIcon className='w-8 ' /> : <Bars2Icon className='w-8' />}
                        </button>
                    </div>
                </div>

                {
                    showMenu

                    &&

                    <div className='border-t mt-4 bg-transparent md:hidden border-b'>
                        <div className=" text-black ">
                            <ul>
                                <li className='transition-all duration-300 hover:text-xl hover:bg-white px-5 py-3 text-lg'>Home</li>
                                <li className='transition-all duration-300 hover:text-xl hover:bg-white px-5 py-3 text-lg'>About Me</li>
                                <li className='transition-all duration-300 hover:text-xl hover:bg-white px-5 py-3 text-lg'>Projects</li>
                                <li className='transition-all duration-300 hover:text-xl hover:bg-white px-5 py-3 text-lg'>Blog</li>
                                <li className='transition-all duration-300 hover:text-xl hover:bg-white px-5 py-3 text-lg'>Contact</li>
                            </ul>
                        </div>
                    </div>
                }
            </nav>

        </header>
    )
}

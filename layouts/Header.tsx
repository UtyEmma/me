import Head from 'next/head'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Bars2Icon, ChevronUpIcon, CommandLineIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useTheme } from 'next-themes'
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller, animateScroll } from 'react-scroll'
import { MediumLink, ResumeLink } from '../pages/api/data/utils'
import { Button } from '../components/Buttons/Button'
import { ThemeToggle } from './Partials/ThemeToggle'

interface IHeader {
    title: string
}

export const Header = ({title} : IHeader) => {

    const [showMenu, setShowMenu] = useState(false)
    
    const [parent] = useAutoAnimate()
    const [btn] = useAutoAnimate()
    const headerRef = useRef<HTMLHeadingElement | null>(null)

    const { theme, setTheme } = useTheme()

    const handleScroll = () => {
        const pos = window.scrollY

        if(pos > 10) {
            headerRef.current?.classList.add(theme == 'dark' ? 'bg-zinc-900' : 'bg-white')
            headerRef.current?.classList.add('z-50')
            headerRef.current?.classList.add('shadow')
        }else{
            headerRef.current?.classList.remove('bg-white')
            headerRef.current?.classList.remove('bg-zinc-900')
            headerRef.current?.classList.remove('z-50')
            headerRef.current?.classList.remove('shadow')
        }
    }
    
    useEffect(() => {
        if(window.scrollY > 10){
            if(theme === 'dark'){
                headerRef.current?.classList.add('bg-zinc-900')
                headerRef.current?.classList.remove('bg-white')
            }else{
                headerRef.current?.classList.remove('bg-zinc-900')
                headerRef.current?.classList.add('bg-white')
            }
            headerRef.current?.classList.add('z-50')
            headerRef.current?.classList.add('shadow')
        }else{
            headerRef.current?.classList.remove('bg-zinc-900')
            headerRef.current?.classList.remove('bg-white')
            headerRef.current?.classList.remove('z-50')
            headerRef.current?.classList.remove('shadow')
        }
    }, [theme])

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [theme])


    return (
        <header ref={headerRef} className='sticky top-0 transition-all duration-500'>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav ref={parent as any} className='py-6 max-w-7xl mx-auto'>
                <div className='flex justify-between items-center md:px-0 px-4'>
                    <Link href={'/'} className='flex bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600 text-transparent  space-x-1 items-center '>
                        <CommandLineIcon className='w-8 text-purple-800' />
                        <span className='text-2xl font-semibold'>UtyEmma.</span>
                    </Link>   

                    <div className='flex space-x-4'>
                        <ul className='md:flex space-x-7 items-center font-medium text-md hidden'>
                            <li className='hover:-translate-y-1 font-medium hover:font-semi-bold hover:text-purple-600 transition-all duration-300'>
                                <Link href="/#about" className='cursor-pointer' >Skills</Link>
                            </li>
                            <li className='hover:-translate-y-1 font-medium hover:font-semi-bold hover:text-purple-600 transition-all duration-300'>
                                <Link href="/projects"  className={`cursor-pointer`} >Projects</Link>
                            </li>
                            <li className='hover:-translate-y-1 font-medium hover:font-semi-bold hover:text-purple-600  transition-all duration-300'>
                                <Link href={ResumeLink} target="_blank">Resume</Link>
                            </li>
                            <li className='hover:-translate-y-1 font-medium hover:font-semi-bold hover:text-purple-600 transition-all duration-300'>
                                <Link href={MediumLink} className='cursor-pointer' target={'_blank'}>Blog</Link>
                            </li>
                            <li className='hover:-translate-y-1 font-medium hover:font-semi-bold hover:text-purple-600 transition-all duration-300'>
                                <ScrollLink to="contact" className='cursor-pointer' offset={-50} duration={500} spy={true} hashSpy={true} activeClass="text-purple-600" smooth={true}>
                                    <Button active>Get in Touch</Button>
                                </ScrollLink>
                            </li>
                        </ul>

                        <ThemeToggle />

                        <button ref={btn as any} className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <XMarkIcon className='w-8 ' /> : <Bars2Icon className='w-8' />}
                        </button>
                    </div>
                </div>

                {
                    showMenu

                    &&

                    <div className='border-t mt-4 md:hidden shadow border-'>
                        <div className={`${theme == 'dark' ? 'text-white' : 'text-black'} py-3`}>
                            <ul>
                                <li className='transition-all duration-300 hover:text-xl  hover:text-black px-5 py-3 text-lg'>
                                    <ScrollLink to="about" className='cursor-pointer  w-full h-full block' offset={-50} duration={500} spy={true} hashSpy={true} activeClass="text-purple-600" smooth={true}>Skills</ScrollLink>
                                </li>
                                <li className='transition-all duration-300 hover:text-xl  px-5 py-3 text-lg'>
                                <Link href="/projects"  className={`cursor-pointer block`} >Projects</Link>
                                </li>
                                <li className='transition-all duration-300 hover:text-xl  px-5 py-3 text-lg'>
                                    <Link href={ResumeLink} className="cursor-pointer w-full h-full block" target="_blank" >
                                        Resume
                                    </Link>
                                </li>
                                <li className='transition-all duration-300 hover:text-xl  px-5 py-3 text-lg'>
                                    <Link href={MediumLink} className='cursor-pointer w-full h-full block' target={'_blank'}>Blog</Link>
                                </li>
                                <li className='transition-all duration-300 hover:text-xl hover:bg-white px-5 py-3 text-lg'>
                                    <ScrollLink to="contact" className='cursor-pointer' offset={-50} duration={500} spy={true} hashSpy={true} activeClass="text-purple-600" smooth={true}>
                                        <Button active>Get in Touch</Button>
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </nav>
        </header>
    )
}

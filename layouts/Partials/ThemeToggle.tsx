import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Menu } from '@headlessui/react'
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()

    const [show, setShow] = useState(false)

    const dropdownRef = React.createRef<HTMLDivElement>()


    const [parent] = useAutoAnimate()
    
    const toggleTheme = () => {
        // if(theme == 'light') 
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            <div className='flex items-center relative z-50' ref={parent as any} >
                <button onClick={() => setShow(!show)} >
                    {
                        theme === 'light' || theme === 'system'  
                        
                        ? 

                        <span className={`${theme == 'light' ? 'fill-purple-700' : 'fill-current'}`}>
                            <SunIcon className={` w-7`} /> 
                        </span>
                        
                        : 
                        
                        ''
                    }
                    {
                        theme === 'dark' ? <MoonIcon className='fill-current w-7' /> : ''
                    }
                </button>
                
                {
                    show

                    ?

                    <div ref={dropdownRef} className="absolute right-0 top-10 md:top-14">
                        <div className={` w-40 p-2 ${theme == 'light' || theme == 'system' ? 'bg-white text-black' : 'bg-zinc-800 text-gray-400'} shadow-lg drop-shadow dark:bg-zinc-800 z-50`}>
                            <ul className='w-full text-current'>
                                <li role={'button'} onClick={() => setTheme('light')} className={`p-2 hover:text-purple-500 cursor-pointer ${theme === 'light' ? "text-purple-600" : ''}`}>
                                    <span className='flex items-center gap-x-3'>
                                        <SunIcon className=' w-6' /> <span>Light</span>
                                    </span>
                                </li>
                                <li role={'button'} onClick={() => setTheme('dark')} className={`p-2 hover:text-purple-500 cursor-pointer ${theme === 'dark' ? "text-purple-600" : ''}`}>
                                    <span className='flex items-center gap-x-3'>
                                        <MoonIcon className='w-6' /> Dark
                                    </span>
                                </li>
                                <li role={'button'} onClick={() => setTheme('system')} className={`p-2 flex items-center gap-x-2 hover:text-purple-500 cursor-pointer ${theme === 'system' ? "text-purple-600" : ''}`}>
                                    <span className='flex items-center gap-x-3'>
                                        <ComputerDesktopIcon className=' w-6' /> System
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    :

                    ""

                }
            </div>
        </>
    )
}

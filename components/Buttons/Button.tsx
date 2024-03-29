import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { ComponentProps, HTMLAttributes, PropsWithChildren, useMemo } from 'react'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    loading?: boolean
    active?: boolean

}

export const Button = ({className, active = false, children, ...props}: IButtonProps) => {
    const { theme, setTheme } = useTheme()
    
    const toggleClass = useMemo(() => {
        return theme == 'dark' ? 'border-white text-white' : 'border-black text-black' 
    }, [theme])

    return (
        <button className={`group relative inline-block focus:outline-none  active:text-white ${className}`} {...props} >
            <span className={`absolute inset-0 bg-purple-500 ${active ? "" : 'translate-x-1.5 translate-y-1.5  transition-transform group-hover:translate-y-0 group-hover:translate-x-0'}`}></span>
        
        <span
            className={`relative inline-block border-2 ${toggleClass}  px-8 py-3 text-sm font-bold uppercase tracking-widest   group-active:text-opacity-75`}
            style={{
                colorScheme: 'dark'
            }}>
            {children}        
        </span>
        </button>
    )
}

import { useTheme } from 'next-themes'
import React, { ComponentProps, HTMLAttributes, PropsWithChildren } from 'react'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    loading?: boolean
}

export const Button = ({className, children, ...props}: IButtonProps) => {
    const { theme, setTheme } = useTheme()

    return (
        <button className={`group relative inline-block focus:outline-none  active:text-white ${className}`} {...props} >
            <span
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>
        
        <span
            className={`relative inline-block border-2 ${theme == 'dark' ? 'border-white text-white' : 'border-black text-black' }  px-8 py-3 text-sm font-bold uppercase tracking-widest   group-active:text-opacity-75`}
            style={{
                colorScheme: 'dark'
            }}>
            {children}        
        </span>
        </button>
    )
}

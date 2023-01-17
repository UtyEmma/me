import React, { ComponentProps, HTMLAttributes, PropsWithChildren } from 'react'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    loading?: boolean
}

export const Button = ({className, children, ...props}: IButtonProps) => {
    return (
        <button className={`group relative inline-block focus:outline-none  focus:text-white ${className}`} {...props} >
            <span
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>
        
        <span
            className="relative inline-block border-2 border-black px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-white  group-active:text-opacity-75"
        >
            {children}        
        </span>
        </button>
    )
}

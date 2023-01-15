import React, { ComponentProps, HTMLAttributes, PropsWithChildren } from 'react'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    loading?: boolean
}

export const Button = ({className, children, ...props}: IButtonProps) => {
    return (
        <button className={`inline items-center justify-center bg-black px-6 py-4 border text-base uppercase font-light text-white hover:text-black transition-all  duration-500 hover:border-black hover:bg-white hover:border ${className}`} {...props} >
            {children}        
        </button>
    )
}

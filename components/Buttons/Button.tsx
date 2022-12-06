import React, { ComponentProps, HTMLAttributes, PropsWithChildren } from 'react'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    loading?: boolean
}

export const Button = ({className, children, ...props}: IButtonProps) => {
    return (
        <button className={`inline-flex relative items-center justify-center bg-black px-16 py-4 text-base uppercase font-light text-white hover:text-black transition-all overflow-hidden duration-500 hover:border-black group hover:bg-white hover:border ${className}`} {...props} >
            {children}        
        </button>
    )
}

import React, { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {

}

export const Input = ({className, ...props}: InputProps) => {
    return (
        <input className={`border rounded-none p-2 px-4 outline-none transition-all duration-300 focus:border-black ${className}`} {...props}  />
    )
}

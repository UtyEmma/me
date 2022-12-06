import React, { ComponentProps, HTMLAttributes, PropsWithChildren } from 'react'

interface ITextAreaProps extends PropsWithChildren<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> {
    
}

export const TextArea = ({className, children, ...props}: ITextAreaProps) => {
    return (
        <textarea className={`border rounded-none p-2 px-4 outline-none transition-all duration-300 focus:border-black ${className}`} {...props}>{children}</textarea>
    )
    
}

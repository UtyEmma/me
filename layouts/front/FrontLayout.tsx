import React, { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface IFrontLayoutProps extends PropsWithChildren {
    title: string
}

export const FrontLayout = ({title, children}: IFrontLayoutProps) => {
    return (
        <div className="flex flex-col justify-between min-h-screen w-full">
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

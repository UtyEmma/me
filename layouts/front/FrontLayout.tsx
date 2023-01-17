import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface IFrontLayoutProps extends PropsWithChildren {
    title: string
}

export const FrontLayout = ({title, children}: IFrontLayoutProps) => {
    return (
        <div className={`flex flex-col justify-between min-h-screen w-full `} >
            {/* <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head> */}
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

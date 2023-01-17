import '../styles/globals.css'
import 'aos/dist/aos.css';

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000
    //     })
    // }, [])

    return (
        <Component {...pageProps} />
    )
}

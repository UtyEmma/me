import Head from 'next/head'
import React from 'react'

const baseUrl = "https://utyemma.vercel.app/"
const siteImage = `${baseUrl}images/utyemma.jpg`

export const Meta = () => {
    return (
        <Head>
            <meta name="description" content="Utibe-Abasi Emmanuel Akpan - Full Stack Web developer"/>
            <meta name="keywords" content="Website Development, Web Design,Full Stack Developer, Laravel Developer, React JS developer, PHP Developer, Angular Developer, Website Design Company, Javascript Developer, Nigeria, Enugu, Web, Website, Content Writing, Advertisement, Branding, Web Hosting"/>
            <meta name="Classification" content="Full Stack Developer" />
            <meta name="target" content="Full Stack Web developer" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="GOOGLEBOT" content="index follow"/>
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="bingbot" content="index follow" />
            <meta name="Slurp" content="index follow" />

            <meta property="fb:app_id" content="" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Utibe-Abasi Emmanuel"/>
            <meta property="og:title" content="Utibe-Abasi Emmanuel Akpan - Full Stack Web developer"/>
            <meta property="og:type" content="article"/>
            <meta property="og:description" content="Full Stack Web developer - Utibe-Abasi Emmanuel Akpan." />
            <meta property="og:url" content={baseUrl} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:image:secure_url" content={siteImage} />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="415" />

            <meta name="twitter:card" content="Utibe-Abasi Emmanuel Akpan - Full Stack Web developer"/>
            <meta name="twitter:title" content="Utibe-Abasi's Portfolio - Full Stack Web developer"/>
            <meta name="twitter:url" content={baseUrl} />
            <meta name="twitter:description" content="Utibe-Abasi Emmanuel Akpan - Full Stack Web developer"/>
            <meta name="twitter:image" content={siteImage}/>
            <meta name="twitter:domain" content={baseUrl} />
            <meta name="twitter:creator" content="Utibe-Abasi Emmanuel Akpan" />

            <meta itemProp="name" content="Utibe-Abasi Emmanuel Akpan - Full Stack Web developer" />
            <meta itemProp="description" content="Utibe-Abasi Emmanuel Akpan - Full Stack Web developer" />
            <meta itemProp="image" content={siteImage} />
        </Head>
    )
}

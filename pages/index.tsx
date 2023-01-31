import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/Buttons/Button'
import { Input } from '../components/Forms/Input'
import { TextArea } from '../components/Forms/TextArea'
import Facebook from '../components/Icons/Facebook'
import Github from '../components/Icons/Github'
import Instagram from '../components/Icons/Instagram'
import { LinkedIn } from '../components/Icons/LinkedIn'
import Twitter from '../components/Icons/Twitter'
import Whatsapp from '../components/Icons/WhatsApp'
import ExperienceItem from '../partials/ExperienceItem'
import { Footer } from '../layouts/Footer'
import { FrontLayout } from '../layouts/FrontLayout'
import { Header } from '../layouts/Header'
import ProjectCard from '../partials/ProjectCard'
import { IProject } from '../types/projects'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Typewriter from 'typewriter-effect';
import SkillBlock  from '../partials/SkillBlock'
import { Element, Link as ScrollLink } from 'react-scroll'
import { useTheme } from 'next-themes'
import HeroBg  from '../partials/HeroBg'
import { IPosts } from '../types/posts'
import BlogPost  from '../partials/BlogPost'
import { ResumeLink } from './api/data/utils'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ProjectList } from './api/data/projects'
import axios from 'axios'
import { ISkill } from '../types/skills'
import { IExperience } from '../types/experience'
import { SocialLinks } from './api/data/social'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Meta } from '../components/Meta/Meta'


interface IHomeProps {
    projects: IProject[],
    posts: IPosts
    skills: ISkill[]
    experience: IExperience[]
}

export default function Home({projects, posts, skills, experience}: IHomeProps) {
    
    const { theme, setTheme } = useTheme()

    const slider = useRef<any>()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,

        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <FrontLayout title='Utibe-Abasi Emmanuel'>
            <Header title={"Utibe-Abasi Emmanuel"} />

            <div >
                <HeroBg />

                <div className="max-w-7xl mx-auto md:pb-0 pb-10 pt-10 md:pt-24 px-5 md:px-0 ">
                    <div className="md:flex items-center relative -z-10">
                        <div className='md:w-1/2' >
                            <p className='md:text-2xl text-xl px-1 mb-2 bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500 text-transparent '>Hi there, I am</p>
                            <h1 className='md:text-5xl uppercase font-semibold text-5xl  px-0 mb-2  '>Utibe-Abasi  Emmanuel</h1>
                            <div className='uppercase tracking-wide text-xl md:text-2xl text-gray-500  flex gap-x-1'>
                                <Typewriter
                                    options={{
                                        strings: ['Full Stack Developer', 'Laravel/PHP Developer', 'ReactJS Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>

                            <div className="grid  mt-10">
                                <div className='md:col-span-3'>
                                    <p className='text-2xl md:text-3xl'>I am a <span className='font-medium'>highly skilled Full Stack Web Developer</span> based in Nigeria. I am interested in <span className='italic font-medium'>building tech-driven solutions</span> that will create a better future for Humanity!</p>
                                </div>
                            </div>

                            <div className='flex space-x-3 my-10'>
                                <Link href={ResumeLink}  target="_blank">
                                    <Button className=''>Download My Resume</Button>
                                </Link>
                            </div>
                        </div>

                        <div className='md:w-1/2'>
                            <div className={`md:w-2/3 mx-auto bg-transparent p-3 -z-10 ${theme == 'dark' ? 'bg-gray-500 bg-opacity-10' : 'bg-white border'}  mb-10 group relative shadow`}>
                                {/* <span className="absolute inset-0 bg-purple-500 bg-opacity-20 blur-lg transition-transform  duration-300" ></span> */}
                                {/* <span className="absolute inset-0 border bg-white"></span> */}

                                <div className="aspect-square bg-gray-200 mb-2 overflow-hidden relative ">
                                    <img src="/images/utyemma.jpg" alt="" className='object-cover  min-h-full group-hover:scale-105 transition-all duration-1000' />
                                </div>
                                
                                <div className="mt-1 p-5 bg-purple-700 flex justify-center relative gap-x-1">
                                    <div className="p-1 bg-white bg-opacity-70 rounded-full"></div>
                                    <div className="p-1 bg-white bg-opacity-70 rounded-full"></div>
                                    <div className="p-1 bg-white bg-opacity-70 rounded-full"></div>
                                </div>

                            </div>
                        </div>

                        <div className="md:absolute md:bottom-0 md:right-0" >
                            <div className='flex md:flex-col items-center gap-5 md:gap-5'>
                                <div  className={`border w-10  md:hidden ${theme === 'dark' ? 'border-white' : 'border-gray-500'}`}></div>
                                <Link href={SocialLinks.facebook}  target={'_blank'} className={`${theme == 'dark' ? 'text-white' : "text-purple-600"} hover:text-purple-700 transition-all duration-300`}>
                                    <Facebook size={30} />
                                </Link>
                                <Link href={SocialLinks.twitter} target={'_blank'} className={`${theme == 'dark' ? 'text-white' : "text-purple-600"} hover:text-purple-700 transition-all duration-300`}>
                                    <Twitter size={30} />
                                </Link>
                                <Link href={SocialLinks.instagram} target={'_blank'} className={`${theme == 'dark' ? 'text-white' : "text-purple-600"} hover:text-purple-700 transition-all duration-300`}>
                                    <Instagram size={30} />
                                </Link>
                                <Link href={SocialLinks.linkedin} target={'_blank'} className={`${theme == 'dark' ? 'text-white' : "text-purple-600"} hover:text-purple-700 transition-all duration-300`}>
                                    <LinkedIn size={30} />
                                </Link>
                                <Link href={SocialLinks.github} target={'_blank'} className={`${theme == 'dark' ? 'text-white' : "text-purple-600"} hover:text-purple-700 transition-all duration-300`}>
                                    <Github size={30} fill="#00000" />
                                </Link>
                                <Link href={SocialLinks.whatsapp} target={'_blank'} className={`${theme == 'dark' ? 'text-white' : "text-purple-600"} hover:text-purple-700 transition-all duration-300`}>
                                    <Whatsapp size={30} />
                                </Link>
                                <div style={{width: '2px'}} className={`${theme == 'dark' ? 'bg-white' : "bg-purple-600"} h-20 md:block hidden border-left`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Element name="about" id='about' className={`${theme == 'dark' ? 'bg-zinc-900' : 'bg-purple-50'}`}>
                <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 space-y-5">
                    <div className=' flex space-x-5 items-center'>
                        <div className='md:w-1/2'>
                            <p className='text-2xl md:text-3xl uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent mb-0'>01. Skills & Experience</p>
                            <p className='text-xl text-gray-500'>Here are some of my super powers and what I have been doing with them.</p>
                        </div>
                        <hr className='border-black flex-1 hidden md:block' />
                    </div>

                    <div className='md:flex gap-10'>
                        <div className='md:w-1/2 '>
                            <div className='flex items-center mb-3'>
                                <hr className='w-2/12 ' />
                                <p className='text-xl font-medium ml-3 uppercase '>Skills</p>
                            </div>
                            <div className='flex justify-start flex-wrap gap-3'>
                                {
                                    skills.filter(skill => skill.status === true).map(skill => (
                                        <SkillBlock img={skill.logo} key={skill.name.toLowerCase()} title={skill.name} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full mt-6 md:mt-0'>
                            <div className='flex items-center mb-3'>
                                <hr className='w-2/12' />
                                <p className='text-xl font-medium ml-3 uppercase'>Experience</p>
                            </div>

                            <div className='space-y-6'>
                                {
                                    experience.filter(exp => exp.status === true).map((exp, index) => <ExperienceItem key={exp.role.toLowerCase() + "-" + index} experience={exp} />)
                                }
                            </div>

                            <div className="mt-10">
                                <Link href={ResumeLink} target="_blank" >
                                    <Button className='flex gap-x-2 items-center justify-center'>Download Resume </Button> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            <Element name='projects' className=''>
                <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 space-y-5">
                    <div className=' md:flex items-center'>
                        <div className='md:w-1/2'>
                            <p className='text-2xl md:text-3xl  mb-0 uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent'>02. Featured Projects</p>
                            <p className='text-xl text-gray-500'>Check out a selection of some amazing projects I worked on.</p>
                        </div>
                        <div className='flex-1 md:flex hidden md:justify-end '>
                            {/* <hr className='border-black flex-1 hidden md:block' /> */}
                            <div className='flex gap-x-4'>
                                <div role={'button'} onClick={() => slider.current?.slickPrev()} className="w-14 h-14 hover:bg-gray-200 active:bg-gray-50 duration-500 flex items-center justify-center cursor-pointer border">
                                    <ChevronLeftIcon className='w-8' />
                                </div>
                                <div role={'button'} onClick={() => slider.current?.slickNext()} className="w-14 h-14 hover:bg-gray-200 active:bg-gray-50 duration-500 flex items-center justify-center cursor-pointer border">
                                    <ChevronRightIcon className='w-8' />
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div>
                        <Slider {...settings} ref={slider} >
                            {
                                projects?.filter(project => project.status === 'active').map(project => (
                                    <div className="md:px-2" key={project.id}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                    <div className='md:hidden '>
                        <div className='flex justify-between gap-x-4'>
                            <div role={'button'} onClick={() => slider.current?.slickPrev()} className="w-10 h-10 hover:bg-gray-200 active:bg-gray-50 duration-500 flex items-center justify-center cursor-pointer border">
                                <ChevronLeftIcon className='w-5' />
                            </div>
                            <div role={'button'} onClick={() => slider.current?.slickNext()} className="w-10 h-10 hover:bg-gray-200 active:bg-gray-50 duration-500 flex items-center justify-center cursor-pointer border">
                                <ChevronRightIcon className='w-5' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex ">
                        <div className="flex flex-wrap gap-5 pt-5 md:pt-10">
                            <Link href={'/projects'} >
                                <Button className='bg-transparent border-black text-black hover:text-white hover:bg-black'>See more Projects</Button> 
                            </Link>
                            <ScrollLink to="contact" className='cursor-pointer' offset={-50} duration={500} spy={true} hashSpy={true} activeClass="text-purple-600" smooth={true} >
                                <Button className=''>Let&apos;s Talk</Button> 
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </Element>

            <Element name='blog' id='blog' className={`${theme == 'dark' ? 'bg-zinc-900' : 'bg-purple-50'}`}>
                <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 space-y-5">
                    <div className=' flex space-x-5 items-center'>
                        <div className='md:w-1/2'>
                            <p className='text-2xl md:text-3xl uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent mb-0'>03. Featured Articles</p>
                            <p className='text-xl text-gray-500'>I love sharing my thoughts, experience and technologies to help others. Here are some you might be interested in.</p>
                        </div>
                        <hr className='border-black flex-1 hidden md:block' />
                    </div>

                    <div className="max-w-7xl  mx-auto">
                        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                            {posts?.items?.map((post, i) => i > 1 ? "" : <BlogPost post={post} key={post.title.split(' ').join('')+i} />)}
                        </div>
                    </div>

                    
                    <div className="mt-10 pt-10">
                        <Link href={posts?.feed.link || ''} target={'_blank'} >
                            <Button className='bg-transparent border-black text-black hover:text-white hover:bg-black'>Visit My Blog</Button> 
                        </Link>
                    </div>
                </div>
            </Element>


            <Element name='contact' className='pt-10 md:py-20'>
                <div className='text-center '>
                    <p className='text-3xl  md:text-3xl font-medium'>Interested in collaborating with me?</p>
                    <p className='text-xl  md:text-2xl mt-3 text-gray-500 md:w-3/5 mx-auto'>I&apos;m always open to discussing software development work or partnership opportunities. <span className='italic text-purple-600'>Let&apos;s talk!</span></p>
                </div>

                <div className='my-20 md:flex justify-center space-y-5 md:space-y-0 md:gap-x-10'>
                    <div className='text-center'>
                        <Link href={`mailto:utyemma@gmail.com`}>
                            <Button  className='inline-flex  mx-auto items-center'>
                                <p className='text-xl md:text-2xl lowercase'>utyemma@gmail.com</p>
                            </Button>
                        </Link>
                    </div>
                    <div className='text-center'>
                        {/* <PhoneIcon className='w-8 mx-auto' /> */}
                        <Link href={`tel:+2349038705881`} >
                            <Button className='inline-flex  mx-auto items-center'>
                                <p className='text-xl md:text-2xl lowercase'>+234 903 870 5881</p>
                            </Button>
                        </Link>
                    </div>
                </div>
                
                <div className="text-center mb-5 md:mt-10">
                    <h4 className='text-xl md:text-3xl'>Let&apos;s connect on Social Media</h4>
                </div>

                <div className='flex justify-center md:justify-between gap-x-4 items-center w-full mb-5'>
                    <hr className='w-1/4 border-gray-400 hidden md:block' />
                    <div className='space-x-8 md:space-x-5 flex flex-1 justify-center  items-center'>
                        <Link href={SocialLinks.linkedin} target={'_blank'} className='transition-all duration-500 flex items-center  gap-x-2  hover:-translate-y-2'>
                            <LinkedIn size={30} fill="#fafafa" /> <span className='hidden md:block'>LinkedIn</span>
                        </Link>
                        <hr className='w-3 hidden md:block border-gray-400' />
                        <Link href={SocialLinks.twitter}  target={'_blank'} className='transition-all duration-500 flex items-center gap-x-2  hover:-translate-y-2'>
                            <Twitter size={30} fill="#fafafa" /> <span className='hidden md:block'>Twitter</span>
                        </Link>
                        <hr className='w-3 hidden md:block border-gray-400' />
                        <Link href={SocialLinks.github}  target={'_blank'} className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                            <Github size={30} fill="#fafafa" /> <span className='hidden md:block'>Github</span>
                        </Link>
                        <hr className='w-3 hidden md:block border-gray-400' />
                        <Link href={SocialLinks.facebook} target={'_blank'} className='transition-all duration-500 flex items-center gap-x-2  hover:-translate-y-2'>
                            <Facebook size={30} fill="#fafafa" /> <span className='hidden md:block'>Facebook</span>
                        </Link>
                        <hr className='w-3 hidden md:block border-gray-400' />
                        <Link href={SocialLinks.instagram} target={'_blank'} className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                            <Instagram size={30} fill="#fafafa" /> <span className='hidden md:block'>Instagram</span>
                        </Link>
                        <hr className='w-3 hidden md:block border-gray-400' />
                        <Link href={SocialLinks.whatsapp} target={'_blank'} className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                            <Whatsapp size={30} fill="#fafafa" /> <span className='hidden md:block'>WhatsApp</span>
                        </Link>
                        {/* <hr className='w-3 hidden md:block' /> */}
                    </div>

                    <hr className='w-1/4 border-gray-400 hidden md:block' />
                </div>
            </Element>

            <section>
                <Footer />  
            </section>
        </FrontLayout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.APP_URL}/api/home`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })

    const data : IHomeProps = await res.json()    
    return { props: {...data} }
}


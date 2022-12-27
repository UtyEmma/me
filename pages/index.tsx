import { ArrowRightIcon, DocumentArrowDownIcon, EnvelopeIcon, MagnifyingGlassIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline'
import { ArrowDownIcon, BriefcaseIcon, TvIcon } from '@heroicons/react/24/outline'
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
import { BlogPostCard } from '../layouts/blogposts/BlogPostCard'
import { ExperienceItem } from '../layouts/Experience/ExperienceItem'
import { Footer } from '../layouts/front/Footer'
import { FrontLayout } from '../layouts/front/FrontLayout'
import { Header } from '../layouts/front/Header'
import { ProjectCard } from '../layouts/Projects/ProjectCard'

export default function Home() {
    return (
        <FrontLayout title='Utibe-Abasi Emmanuel'>
            <div className='text-white bg-black' >
                <Header title={"Utibe-Abasi Emmanuel"} />
                <div className="max-w-6xl mx-auto md:pt-36 pb-20 md:pb-36 pt-24 px-5 md:px-0 relative">
                    <div className="flex flex-col">
                        <div >
                            <p className='md:text-xl text-lg px-1 mb-2'>Hi there, I am</p>
                            <h1 className='md:text-6xl text-4xl uppercase px-0 mb-2 font-light tracking-wider text-white'>Utibe-Abasi  Emmanuel</h1>
                            <p className='uppercase font-medium text-lg md:text-2xl'>Full Stack Web Developer</p>

                                <div className="grid md:grid-cols-5 mt-10">
                                    <div className='md:col-span-3'>
                                        <p className='text-2xl md:text-3xl font-extralight'>I am a <span className='italic font-medium'>highly skilled Full Stack Web Developer</span> based in Nigeria. I am interested in <span className='italic font-medium'>building tech-driven solutions</span> that will create a better future for Humanity!</p>
                                    </div>
                                </div>
                            <div className='flex space-x-3 my-10'>
                                <Link href={''} >
                                    <Button className='bg-transparent border-white hover:border-white hover:bg-white'>Download Resume</Button>
                                </Link>
                            </div>

                            <div className="absolute md:bottom-0 bottom-10  md:right-0">
                                <div className='flex md:flex-col items-center gap-5 md:gap-5'>
                                    <div style={{height: '1px'}} className='bg-gray-500 w-10  md:hidden'></div>
                                    <Facebook size={25} />
                                    <Twitter size={25} />
                                    <Instagram size={25} />
                                    <LinkedIn size={25} />
                                    <Github size={25} />
                                    <Whatsapp size={25} />
                                    <div style={{width: '1px'}} className='bg-white h-20 md:block hidden border-left'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <section id='about' className=''>
                <div className="max-w-6xl mx-auto px-5 py-5 md:px-0 space-y-5">
                    <div className='flex space-x-5 items-center pt-5'>
                        <div>
                            <p className='capitalize text-xl font-semibold md:text-2xl'>01. About Me</p>
                        </div>
                        <hr className='border-black flex-1' />
                    </div>

                    <div className='md:flex gap-5'>
                        <div className='md:w-7/12 flex flex-col gap-y-10'>
                            <div className='space-y-4'>
                                <p className='md:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum aperiam sit!</p>
                                <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid, molestias error ducimus eligendi commodi debitis iure optio sapiente veritatis odio laborum temporibus assumenda modi ad repudiandae a suscipit fugit?</p>
                                <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum aperiam sit!</p>
                                <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid, molestias error ducimus eligendi commodi debitis iure optio sapiente veritatis odio laborum temporibus assumenda modi ad repudiandae a suscipit fugit?</p>
                            </div>
                            <div className='space-x-3'>
                                <Link href={''} >
                                    <Button className='bg-transparent border-black text-black hover:border-white hover:text-white hover:bg-black'>Learn More</Button> 
                                </Link>
                                <Link href={''} >
                                    <Button>My Resume</Button> 
                                </Link>
                            </div>
                        </div>
                        <div className='md:w-5/12 w-full mt-6 md:mt-0'>
                            <div className="aspect-square border"></div>
                        </div>
                    </div>

                    <div className="">
                    </div>

                </div>
            </section>

            <section id='experience' className=''>
                <div className="max-w-6xl mx-auto px-5 py-5 md:px-0 space-y-5">
                    <div className='flex space-x-5 items-center pt-5'>
                        <div>
                            <p className='capitalize text-xl font-semibold md:text-2xl'>02. Experience</p>
                        </div>
                        <hr className='border-black flex-1' />
                    </div>

                    <div className='grid md:grid-cols-2 gap-5'>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <ExperienceItem />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <ExperienceItem />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <ExperienceItem />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <ExperienceItem />
                        </div>

                    </div>

                    <div className="">
                        <Link href={''} >
                            <Button>Download My Resume</Button> 
                        </Link>
                    </div>

                </div>
            </section> */}

            <section id='projects' className=''>
                <div className="max-w-6xl mx-auto px-5 py-5 md:px-0 space-y-5">
                    <div className='flex space-x-5 items-center pt-5'>
                        <div>
                            <p className='capitalize text-xl md:text-2xl'>02. Projects</p>
                        </div>
                        <hr className='border-black flex-1' />
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div >
                                <ProjectCard />
                            </div>
                            <div >
                                <ProjectCard />
                            </div>
                            <div >
                                <ProjectCard />
                            </div>
                            <div >
                                <ProjectCard />
                            </div>
                        </div>

                    </div>

                    <div className="space-x-5 ">
                        <Link href={''} >
                            <Button className='bg-transparent border-black text-black hover:text-white hover:bg-black'>My Projects</Button> 
                        </Link>
                        <Link href={''} >
                            <Button className=''>My Resume</Button> 
                        </Link>
                    </div>
                </div>
            </section>

            <section id='blog' className=''>
                <div className="max-w-6xl mx-auto px-5 py-10 md:px-0 space-y-5">
                    <div className='flex space-x-5 items-center pt-5'>
                        <div>
                            <p className='capitalize text-xl md:text-2xl'>03. Blog Posts</p>
                        </div>
                        <hr className='border-black flex-1' />
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div >
                            <BlogPostCard />
                        </div>
                        <div >
                            <BlogPostCard />
                        </div>
                        <div >
                            <BlogPostCard />
                        </div>
                    </div>
                    <div className="">
                        <Link href={''} >
                            <Button className='bg-transparent border-black text-black hover:text-white hover:bg-black'>Blog Posts</Button> 
                        </Link>
                    </div>
                </div>
            </section>

            <section id='contact' className='bg-black text-white pt-10'>
                <div className="max-w-6xl mx-auto px-5 md:px-0">
                    <div className=' text-center mt-5'>
                        <p className='text-xl uppercase md:text-4xl'>Contact Me</p>
                    </div>
                
                    <div className="space-y-6  mt-5">
                        <div className='space-y-5 mb-10'>
                            <Button className='w-full flex items-center space-x-4'>
                                <PhoneArrowUpRightIcon className='w-8' />
                                <p className='text-xl md:text-2xl'>+234 903 870 5881</p>
                            </Button>
                            <Button className='w-full flex items-center space-x-4'>
                                <EnvelopeIcon className='w-8' />
                                <p className='text-xl md:text-2xl lowercase'>utyemma@gmail.com</p>
                            </Button>
                        </div>

                        <div className='flex justify-center md:justify-between gap-x-4 items-center w-full'>
                            <hr className='w-1/4 border-white hidden md:block' />
                            <div className='space-x-5 flex flex-1 justify-center items-center'>
                                <Link href="" className='transition-all duration-500 flex items-center  gap-x-2 text-white  hover:-translate-y-2'>
                                    <LinkedIn size={30} /> <span className='hidden md:block'>LinkedIn</span>
                                </Link>
                                <hr className='w-3 hidden md:block' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2  hover:-translate-y-2'>
                                    <Twitter size={30} /> <span className='hidden md:block'>Twitter</span>
                                </Link>
                                <hr className='w-3 hidden md:block' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                                    <Github size={30} /> <span className='hidden md:block'>Github</span>
                                </Link>
                                <hr className='w-3 hidden md:block' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2  hover:-translate-y-2'>
                                    <Facebook size={30} /> <span className='hidden md:block'>Facebook</span>
                                </Link>
                                <hr className='w-3 hidden md:block' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                                    <Instagram size={30} /> <span className='hidden md:block'>Instagram</span>
                                </Link>
                                <hr className='w-3 hidden md:block' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                                    <Whatsapp size={30} /> <span className='hidden md:block'>WhatsApp</span>
                                </Link>
                            </div>

                            <hr className='w-1/4 border-white hidden md:block' />
                            </div>
                    </div>

                    <div className="mt-10">
                        <Footer />  
                    </div>
                </div>
                

            </section>
        </FrontLayout>
    )
}

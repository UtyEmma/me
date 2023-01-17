import { ArrowDownOnSquareIcon, ArrowRightIcon, DocumentArrowDownIcon, EnvelopeIcon, MagnifyingGlassIcon, PhoneArrowUpRightIcon, UserIcon } from '@heroicons/react/24/outline'
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
import { IProject } from '../types/projects'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Typewriter from 'typewriter-effect';


interface IHomeProps {
    projects: IProject[]
}

export default function Home({projects}: IHomeProps) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <FrontLayout title='Utibe-Abasi Emmanuel'>
            <div className='relative'>
                <Header title={"Utibe-Abasi Emmanuel"} />
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto pb-10 pt-10 md:pt-24 px-5 md:px-0 relative">
                    <div className="md:flex items-center">
                        <div className='md:w-1/2' >
                            <p className='md:text-2xl tracking-wide text-xl px-1 mb-2 bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500 text-transparent '>Hi there, I am</p>
                            <h1 className='md:text-5xl text-4xl uppercase px-0 mb-2 font-light tracking-wide '>Utibe-Abasi  Emmanuel</h1>
                            <p className='uppercase font-medium tracking-wide text-xl md:text-2xl text-gray-500  flex gap-x-1'><span><Typewriter
                                                options={{
                                                    strings: ['Full Stack Developer', 'Laravel / PHP Developer', 'React JS Developer'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                                /></span> </p>

                            <div className="grid  mt-10">
                                <div className='md:col-span-3'>
                                    <p className='text-2xl md:text-3xl font-extralight'>I am a <span className='italic text-purple-600 font-medium'>highly skilled Full Stack Web Developer</span> based in Nigeria. I am interested in <span className='italic font-medium'>building tech-driven solutions</span> that will create a better future for Humanity!</p>
                                </div>
                            </div>

                            <div className='flex space-x-3 my-10'>
                                <Link href={''} >
                                    <Button className=''>Download Resume</Button>
                                </Link>
                            </div>
                        </div>

                        <div className='md:w-1/2'>
                            <div className='md:w-2/3 mx-auto border bg-transparent p-3 mb-10 group relative'>
                                <div className="aspect-square bg-gray-200 mb-2 overflow-hidden relative">
                                    <img src="/images/utyemma.jpg" alt="" className='object-cover min-h-full group-hover:scale-125 transition-all duration-1000' />
                                </div>

                                <div className="mt-1 p-5 bg-purple-700 flex justify-center gap-x-1">
                                    <div className="p-1 bg-white bg-opacity-70 rounded-full"></div>
                                    <div className="p-1 bg-white bg-opacity-70 rounded-full"></div>
                                    <div className="p-1 bg-white bg-opacity-70 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="md:absolute md:bottom-0 md:right-0 " >
                            <div className='flex md:flex-col items-center gap-5 md:gap-5'>
                                <div  className='border w-10 border-gray-500  md:hidden'></div>
                                <Link href={''} className="text-gray-500 hover:text-purple-700">
                                    <Facebook size={25} />
                                </Link>
                                <Link href={''} className="text-gray-500 hover:text-purple-700">
                                    <Twitter size={25} />
                                </Link>
                                <Link href={''} className="text-gray-500 hover:text-purple-700">
                                    <Instagram size={25} />
                                </Link>
                                <Link href={''} className="text-gray-500 hover:text-purple-700">
                                    <LinkedIn size={25} />
                                </Link>
                                <Link href={''} className="text-gray-500 hover:text-purple-700">
                                    <Github size={25} fill="#00000" />
                                </Link>
                                <Link href={''} className="text-gray-500 hover:text-purple-700">
                                    <Whatsapp size={25} />
                                </Link>
                                <div style={{width: '1px'}} className='bg-black h-20 md:block hidden border-left'></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-96 h-96 border absolute -bottom-48 bg-black right-0 rounded-full " /> */}

                </div>
            </div>

            <section id='about' className='bg-purple-50'>
                <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 space-y-5">
                    <div className=' flex space-x-5 items-center'>
                        <div className='md:w-1/2'>
                            <p className='text-2xl md:text-3xl uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent mb-0'>01. Skills & Experience</p>
                            <p className='text-xl text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed quas vel praesentium quidem veritatis mollitia tempora impedit soluta dolorum?</p>
                        </div>
                        <hr className='border-black flex-1 hidden md:block' />
                    </div>

                    <div className='md:flex gap-10'>
                        <div className='md:w-1/2 '>
                            <div className='flex justify-start flex-wrap gap-5'>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 p-5 px-10">
                                    <span className="text-lg">React JS</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Angular 2+</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">PHP</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Laravel</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">MySQL</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Mongo DB</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Node JS</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Typescript</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Golang</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Next JS</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Javascript</span>
                                </div>
                                <div className="flex-auto flex justify-center border items-center bg-gray-100 text-gray-400 rounded-lg p-5 px-10">
                                    <span className="text-lg">Vuew</span>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full mt-6 md:mt-0 space-y-6'>
                            <ExperienceItem />
                            <ExperienceItem />

                            <div className="mt-10">
                                <Link href={''} >
                                    <Button className='flex gap-x-2 items-center justify-center'>Download Resume </Button> 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="">
                    </div>

                </div>
            </section>

            <section id='projects' className=''>
                <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 space-y-5">
                    <div className=' flex space-x-5 items-center'>
                        <div className='md:w-1/2'>
                            <p className='text-2xl md:text-3xl  mb-0 uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent'>02. Portfolio</p>
                            <p className='text-xl text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed quas vel praesentium quidem veritatis mollitia tempora impedit soluta dolorum?</p>
                        </div>
                        <hr className='border-black flex-1 hidden md:block' />
                    </div>
                
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                        <Slider {...settings}  >
                            {
                                projects.map(project => (
                                    <div className="px-2" key={project._id}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))
                            }
                        </Slider>
                    {/* </div> */}

                    <div className="space-x-5">
                        <Link href={''} >
                            <Button className='bg-transparent border-black text-black hover:text-white hover:bg-black'>My Projects</Button> 
                        </Link>
                        <Link href={''} >
                            <Button className=''>My Resume</Button> 
                        </Link>
                    </div>
                </div>
            </section>

            <section id='blog' className='bg-gray-50'>
                <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 space-y-5">
                    <div className=' flex space-x-5 items-center'>
                        <div className='md:w-1/2'>
                            <p className='text-2xl md:text-3xl uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 text-transparent mb-0'>03. Featured Posts</p>
                            <p className='text-xl text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sed quas vel praesentium quidem veritatis mollitia tempora impedit soluta dolorum?</p>
                        </div>
                        <hr className='border-black flex-1 hidden md:block' />
                    </div>

                    <div className="max-w-7xl  mx-auto">
                    {/* Grid */}
                    <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                        {/* Card */}
                        <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                Studio by Preline
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                            </p>
                            <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                </svg>
                            </p>
                            </div>
                        </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description" />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                Onsite
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                            </p>
                            <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                </svg>
                            </p>
                            </div>
                        </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                The complete guide to OKRs
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                How to make objectives and key results work for your company
                            </p>
                            <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                </svg>
                            </p>
                            </div>
                        </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a className="group rounded-xl overflow-hidden" href="#">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                People program models
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Six approaches to bringing your People strategy to life
                            </p>
                            <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                </svg>
                            </p>
                            </div>
                        </div>
                        </a>
                        {/* End Card */}
                    </div>
                    {/* End Grid */}
                    </div>

                    
                    <div className="">
                        <Link href={''} >
                            <Button className='bg-transparent border-black text-black hover:text-white hover:bg-black'>Blog Posts</Button> 
                        </Link>
                    </div>
                </div>
            </section>


            <div className='py-20 '>
                <div className='text-center '>
                    <p className='text-xl  md:text-3xl'>Thank you for checking out my work </p>
                </div>
                <div className='space-y-5 my-10 text-center'>
                    <Button className='inline-flex  mx-auto items-center'>
                        {/* <EnvelopeIcon className='w-8' /> */}
                        <p className='text-xl md:text-2xl lowercase'>utyemma@gmail.com</p>
                    </Button>
                </div>
            </div>

            <section id='contact' className='bg-purple-50'>
                <div className="max-w-7xl mx-auto py-10 px-5 md:px-0">
                
                    <div className="space-y-6">

                        <div className='flex justify-center md:justify-between gap-x-4 items-center w-full'>
                            <hr className='w-1/4 border-gray-400 hidden md:block' />
                            <div className='space-x-5 flex flex-1 justify-center items-center'>
                                <Link href="" className='transition-all duration-500 flex items-center  gap-x-2  hover:-translate-y-2'>
                                    <LinkedIn size={30} fill="#fafafa" /> <span className='hidden md:block'>LinkedIn</span>
                                </Link>
                                <hr className='w-3 hidden md:block border-gray-400' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2  hover:-translate-y-2'>
                                    <Twitter size={30} fill="#fafafa" /> <span className='hidden md:block'>Twitter</span>
                                </Link>
                                <hr className='w-3 hidden md:block border-gray-400' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                                    <Github size={30} fill="#fafafa" /> <span className='hidden md:block'>Github</span>
                                </Link>
                                <hr className='w-3 hidden md:block border-gray-400' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2  hover:-translate-y-2'>
                                    <Facebook size={30} fill="#fafafa" /> <span className='hidden md:block'>Facebook</span>
                                </Link>
                                <hr className='w-3 hidden md:block border-gray-400' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                                    <Instagram size={30} fill="#fafafa" /> <span className='hidden md:block'>Instagram</span>
                                </Link>
                                <hr className='w-3 hidden md:block border-gray-400' />
                                <Link href="" className='transition-all duration-500 flex items-center gap-x-2 hover:-translate-y-2'>
                                    <Whatsapp size={30} fill="#fafafa" /> <span className='hidden md:block'>WhatsApp</span>
                                </Link>
                                {/* <hr className='w-3 hidden md:block' /> */}
                            </div>

                            <hr className='w-1/4 border-gray-400 hidden md:block' />
                            </div>
                    </div>

                </div>
                <div className="border-t ">
                    <Footer />  
                </div>
            </section>
        </FrontLayout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/projects/fetch`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })

    const projects = (await res.json()).projects
  
    // Pass data to the page via props
    return { props: { projects } }
}


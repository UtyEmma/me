import { DocumentArrowDownIcon, EnvelopeIcon, MagnifyingGlassIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline'
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
            <div className='text-white bg-black'>
                <Header title={"Utibe-Abasi Emmanuel"} />

                <div className="max-w-6xl mx-auto md:pt-36 pb-20 md:pb-36 pt-24 px-5 md:px-0 ">
                    <div className="flex flex-col">
                        <div >
                            <p className='md:text-xl text-lg px-1 mb-2'>Hi there, I am</p>
                            <h1 className='md:text-6xl text-4xl uppercase px-0 mb-2 font-light tracking-wider text-white'>Utibe-Abasi  Emmanuel</h1>
                            <p className='uppercase font-medium text-lg md:text-2xl'>Full Stack Web Developer</p>

                                <div className="grid md:grid-cols-5 mt-10">
                                    <div className='md:col-span-3'>
                                        <p className='text-2xl md:text-2xl font-extralight'>I am a <span className='italic font-medium'>highly skilled Full Stack Web Developer</span> based in Nigeria. I am interested in <span className='italic font-medium'>building tech-driven solutions</span> that will create a better future for Humanity!</p>
                                    </div>
                                </div>
                            <div className='flex space-x-3 mt-10'>
                                <Link href={''} >
                                    {/* <ArrowDownIcon className='w-5' />  */}
                                    <Button className='border bg-transparent border-white hover:text-blue-800 hover:border-white hover:bg-white'>Download Resume</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id='about' className=''>
                <div className="max-w-6xl mx-auto px-5 py-5 md:px-0 space-y-5">
                    <div className='flex space-x-3 items-center pt-5'>
                        {/* <MagnifyingGlassIcon className='w-24' /> */}
                        <div className='md:w-3/5 w-full'>
                            <p className='uppercase text-2cxl md:text-3xl'>I have helped over 25 businesses create and deploy their web-based applications.</p>
                        </div>
                        <hr className='border-black md:flex-1' />
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
            </section>

            <section id='projects' className=''>
                <div className="max-w-6xl mx-auto px-5 py-5 md:px-0 space-y-5">
                    <div className='flex space-x-3 items-center'>
                        <div className='md:w-3/5 w-full'>
                            <p className='uppercase text-2xl md:text-3xl'>I enjoy taking on projects that help me upscale my skills.</p>
                        </div>
                        <hr className='border-black md:flex-1' />
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="grid md:grid-cols-3 gap-5">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <ProjectCard />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <ProjectCard />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300">
                                <ProjectCard />
                            </div>
                        </div>

                    </div>

                    <div className="">
                        <Link href={''} >
                            <Button>View More Projects</Button> 
                        </Link>
                    </div>
                </div>
            </section>

            <section id='blog' className=''>
                <div className="max-w-6xl mx-auto px-5 py-10 md:px-0 space-y-5">
                    <div className='flex space-x-3 items-center'>
                        {/* <hr className='border-black w-14 md:w-24' /> */}
                        <div className='md:w-3/5 w-full'>
                            <p className='uppercase text-2xl md:text-3xl'>In my spare time, I write on Tech and Human Capital Development.</p>
                        </div>
                        <hr className='border-black md:flex-1' />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <BlogPostCard />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <BlogPostCard />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <BlogPostCard />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <BlogPostCard />
                        </div>
                    </div>
                    <div className="">
                        <Link href={''} >
                            <Button>Read More Blog Posts</Button> 
                        </Link>
                    </div>
                </div>
            </section>

            <section id='contact' className=''>
                <div className="max-w-6xl mx-auto px-5 md:px-0">
                    <div className=''>
                        <div className="max-w-6xl mx-auto pb-10 md:px-0 space-y-10">
                            <div className='flex space-x-3 items-center'>
                                <div className='md:w-3/5 w-full'>
                                    <p className='uppercase text-2xl md:text-3xl'>I Love making new connections both online and offline.</p>
                                </div>
                                <hr className='border-black md:flex-1' />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex space-y-6">
                        <div className='md:w-2/5 md:border-r md:pr-10 md:py-10 md:pt-16 space-y-6'>
                            <div className='space-y-5'>
                                <h4 className='text-xl mb-0'>Contact Me</h4>
                                <Button className='w-full flex items-center space-x-4'>
                                    <PhoneArrowUpRightIcon className='w-8' />
                                    <p className='text-lg md:text-xl'>+234 903 870 5881</p>
                                </Button>
                                <Button className='w-full flex items-center space-x-4'>
                                    <EnvelopeIcon className='w-8' />
                                    <p className='text-lg md:text-xl lowercase'>utyemma@gmail.com</p>
                                </Button>
                            </div>
                            <div >
                                <h3 className='text-xl mb-5'>Or Via Social Media</h3>
                                <div className='flex justify-start space-x-5 items-center'>
                                    <div className="w-1/4" >
                                        <hr className='w-full border-black' />
                                    </div>

                                    <Link href="" className='transition-all duration-500  hover:-translate-y-2'>
                                        <LinkedIn size={40} />
                                    </Link>
                                    <Link href="" className='transition-all duration-500  hover:-translate-y-2'>
                                        <Twitter size={40} />
                                    </Link>
                                    <Link href="" className='transition-all duration-500  hover:-translate-y-2'>
                                        <Github size={40} />
                                    </Link>
                                    <Link href="" className='transition-all duration-500  hover:-translate-y-2'>
                                        <Facebook size={40} />
                                    </Link>
                                    <Link href="" className='transition-all duration-500 hover:-translate-y-2'>
                                        <Instagram size={40} />
                                    </Link>
                                    <Link href="" className='transition-all duration-500  hover:-translate-y-2'>
                                        <Whatsapp size={40} />
                                    </Link>
                                 </div>
                            </div>
                        </div>
                        <div className='md:w-3/5 md:pl-10 md:py-10 pb-10'>
                            <form action="" method="post" className='space-y-5'>
                                <h4 className='text-xl'>Send me a Message</h4>
                                <div className='space-y-1'>
                                    <label htmlFor="" className='mb-2'>Your Name</label>
                                    <Input placeholder='Your Name' className='w-full'/>
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor="" className='mb-2'>Your Email Address</label>
                                    <Input placeholder='Your Email Address' className='w-full'/>
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor="" className='mb-2'>Your Message</label>
                                    <TextArea placeholder='Your Message' rows={3} className='w-full resize-none'/>
                                </div>

                                <Button >Send Message</Button>
                            </form>
                        </div>
                    </div>

                </div>
                
                <Footer />

            </section>
        </FrontLayout>
    )
}

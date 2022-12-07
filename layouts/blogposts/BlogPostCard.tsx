import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/Buttons/Button'

export const BlogPostCard = () => {
    return (
        <div className='border border-black p-3 px-5'>
            <div className='flex justify-between'>
                <span className='text-xs '><span className='py-0.5 border-r border-black pr-2'>25th Jan, 2022</span>  <span className='pl-0.5'>Web Development</span></span>
            </div>
            <div className='mb-1'>
                <Link href={''} className='leading-tight text-justify font-semibold'>Lorem ipsum dolor sit amet consectetur.</Link>
            </div>
            <p className='text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod culpa quam! Mollitia eius nam ipsa nisi suscipit explicabo consequuntur velit.</p>

            <Link href={'#'} > 
                <Button className='px-3 py-1 capitalize text-sm flex'>
                    <span>Read Post</span>
                    {/* <ArrowRightIcon className='w-4 ' /> */}
                </Button>
            </Link>
        </div>
    
    )
}

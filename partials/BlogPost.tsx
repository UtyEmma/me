import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IPostItem, IPosts } from '../types/posts'

interface IBlogPost {
    post: IPostItem
}

export default function BlogPost ({post}: IBlogPost) {
    const {theme} = useTheme()
    
    return (
        <div className="group overflow-hidden rounded-xl" >
            <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <Link href={post.link}>
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src={post.thumbnail} alt="Image Description" />
                    </Link>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 py-2 px-0">
                    <Link href={post.link} >
                        <h3 className={`text-lg font-medium line-clamp-2 ${theme == 'dark' ? 'text-gray-500 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-700'}`}>{post.title}</h3>
                    </Link>
                    <div className='flex gap-2 gap-x-1 mt-3 items-center flex-wrap' >
                        {/* <p className='text-sm'>Tags:</p> */}
                        {
                            post.categories.map((category, i) => <span key={category + '-' + i} className='text-xs p-1 px-3 rounded bg-purple-500 text-white capitalize'>{category.split('-').join(' ')}</span>)
                        }
                    </div>
                    <Link href={post.link} className="mt-3 inline-flex items-center gap-x-1.5 text-purple-600 decoration-2 hover:underline font-medium">
                        Read Post
                        <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

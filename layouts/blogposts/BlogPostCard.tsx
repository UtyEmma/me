import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/Buttons/Button'

export const BlogPostCard = () => {
    return (
        <div>
            <a href="#"  className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 my-3"> Technology </span>
            <p className=" text-xl font-semibold">
            <a href="#"  className="text-black"> How to mange your remote team? </a>
            </p>
            <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
        </div>
    )
}

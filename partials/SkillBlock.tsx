import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

interface ISkillBlockProps extends HTMLAttributes<HTMLDivElement> {
    img: string
    title: string
}

const SkillBlock = ({img, title, ...props}: ISkillBlockProps) => {
    const {theme} = useTheme()

    return (
        <div className={`flex-auto flex gap-x-3 justify-center  hover:grayscale-0 group rounded items-center ${theme == 'dark' ? 'bg-gray-500 bg-opacity-10 hover:bg-opacity-25 text-gray-500 hover:text-gray-400' : 'bg-white border text-gray-500 hover:text-gray-600'}   transition-all duration-300 cursor-default p-5`}  {...props}>
            <img alt={title} className='transition-all duration-300 group-hover:scale-105' src={img} width={30} />
            <span className="text-lg transition-all duration-300 group-hover:scale-105">{title}</span>
        </div>
    )
}

export default SkillBlock
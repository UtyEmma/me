import { useTheme } from 'next-themes'
import React from 'react'

interface ISkillBlockProps {
    img: string
    title: string
}

const SkillBlock = ({img, title}: ISkillBlockProps) => {
    const {theme} = useTheme()

    return (
        <div className={`flex-auto flex gap-x-3 justify-center  hover:grayscale-0 group border rounded items-center ${theme == 'dark' ? 'bg-white' : 'bg-gray-50'} hover:bg-white text-gray-500 hover:text-gray-600 transition-all duration-300 cursor-default p-5`}>
            <img className='group-hover:scale-105 transition-all duration-300' src={img} width={30} />
            <span className="group-hover:scale-105 transition-all duration-300 text-lg">{title}</span>
        </div>
    )
}

export default SkillBlock
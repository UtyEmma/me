import React from 'react'

export const Footer = () => {
    return (
        <div className='py-6 border-t bg-black text-white'>
            <div className="max-w-6xl mx-auto px-5 md:px-0">
                <div className='flex justify-between w-full'>
                    <p className='text-sm'>Utibe-Abasi Emmanuel</p>
                    <p className='text-sm'>&copy; Copyright - {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}

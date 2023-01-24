import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { ChangeEvent, ComponentProps, FormEvent, useState } from 'react'

interface ImageSelectProps extends ComponentProps<'input'> {

}

export const ImageSelect = ({className, onChange, ...props}: ImageSelectProps) => {

    const [preview, setPreview] = useState('')

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files![0]
        if(!file) return;

        setPreview(URL.createObjectURL(file))

        if(onChange) onChange(e)
    }

    return (
            <label className={`aspect-square border cursor-pointer flex items-center justify-center bg-gray-50 overflow-hidden ${className}`}>
                <input type="file" hidden onChange={onFileChange} {...props} />
                {
                    preview 
                    
                    ?
                    
                    <div className='p-1 min-w-full min-h-full'>
                        <Image alt='' className='min-w-full min-h-full object-cover' src={preview}  />
                    </div>
                    
                    :
                    
                    <PhotoIcon className='w-1/3 text-gray-700' />
                }
            </label>
    )
}

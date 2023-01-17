import { FilmIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React, { FormEvent, useRef } from 'react'
import { Button } from '../../../components/Buttons/Button'
import { ImageSelect } from '../../../components/Files/ImageSelect'
import { Input } from '../../../components/Forms/Input'
import { TagsInput } from '../../../components/Forms/TagInput'
import { TextArea } from '../../../components/Forms/TextArea'
import { DashboardLayout } from '../../../layouts/Admin/DashboardLayout'
import { Editor } from '../../../components/Forms/Editor'
import env from '../../../utils/env'
import axios from 'axios'

export default function EditProject() {

    const imageInput = useRef()

    const createProject = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        console.log(formData)

        const res = await axios.post(`http://localhost:3000/api/projects/create`, formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })

        console.log(await res.data)
    }

    return (
        <DashboardLayout title="Edit Project">
            <div className="bg-white p-10">
                <form onSubmit={createProject} className='space-y-4 w-2/3 mx-auto'>
                    <div className="flex space-x-3">
                        <div className="w-3/5">
                            <div className='space-y-1'>
                                <label htmlFor="" >Project Title</label>
                                <Input className='w-full' name='title' placeholder='Project Title'/>
                            </div>
                        </div>

                        <div className="w-2/5">
                            <div className='space-y-1'>
                                <label htmlFor="" >Project Type</label>
                                <Input className='w-full'  name='type' placeholder='Project Type'/>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="" >Description</label>
                        <Editor name='description' />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="" >Technologies</label>
                        <TagsInput settings={{
                            dropdown: {
                                enabled: 0
                            },
                            maxTags: 5
                        }} className="block" name='tech' showDropdown whitelist={['React Js', "Laravel", "PHP", "HTML", "CSS", "Angular", "Vue", "Golang"]} />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="" >Project Media</label>
                        <Input className='w-full' ref={imageInput as any} type={'file'} name="image" accept='jpg png jpeg' />
                    </div>

                    <div>
                        <Button className='py-2 px-4'>Save Project</Button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    )
}

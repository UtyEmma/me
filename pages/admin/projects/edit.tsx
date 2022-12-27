import { FilmIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React, { FormEvent } from 'react'
import { Button } from '../../../components/Buttons/Button'
import { ImageSelect } from '../../../components/Files/ImageSelect'
import { Input } from '../../../components/Forms/Input'
import { TagsInput } from '../../../components/Forms/TagInput'
import { TextArea } from '../../../components/Forms/TextArea'
import { DashboardLayout } from '../../../layouts/Admin/DashboardLayout'
import { Editor } from '../../../components/Forms/Editor'

export default function EditProject() {

    const createProject = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3000/api/projects/create', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget).entries()))
        })

        console.log(await res.json())
    }

    return (
        <DashboardLayout title="Edit Project">
            <form onSubmit={createProject} className='space-y-4'>
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
                    <label htmlFor="" >Excerpt</label>
                    <TextArea rows={3} name="excerpt" className='w-full resize-none' placeholder='Short Description'/>
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
                    }} className="w-full" name='tech' showDropdown whitelist={['React Js', "Laravel", "PHP", "HTML", "CSS", "Angular", "Vue", "Golang"]} />
                </div>

                <div className='space-y-1'>
                    <label htmlFor="" >Project Media</label>
                    {/* <div className="grid grid-cols-6  gap-3 p-3 border">
                        <ImageSelect />
                        <ImageSelect />
                        <ImageSelect />
                    </div> */}

                    <Input className='w-full' type={'file'} multiple name="images" accept='jpg png jpeg' />
                </div>

                <div>
                    <Button className='py-2 px-4'>Save Project</Button>
                </div>
            </form>
        </DashboardLayout>
    )
}

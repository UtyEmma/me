import React from 'react'
import { Button } from '../../../components/Buttons/Button'
import { Input } from '../../../components/Forms/Input'
import { TextArea } from '../../../components/Forms/TextArea'
import { DashboardLayout } from '../../../layouts/Admin/DashboardLayout'

export default function EditProject() {
  return (
    <DashboardLayout title="Edit Project">
        <form className='space-y-4'>
            <div className="flex space-x-3">
                <div className="w-3/5">
                    <div className='space-y-1'>
                        <label htmlFor="" >Project Title</label>
                        <Input className='w-full' placeholder='Project Title'/>
                    </div>
                </div>

                <div className="w-2/5">
                    <div className='space-y-1'>
                        <label htmlFor="" >Project Type</label>
                        <Input className='w-full' placeholder='Project Type'/>
                    </div>
                </div>
            </div>

            <div className='space-y-1'>
                <label htmlFor="" >Excerpt</label>
                <TextArea rows={3} className='w-full resize-none' placeholder='Short Description'/>
            </div>

            <div className='space-y-1'>
                <label htmlFor="" >Description</label>
                <TextArea rows={3} className='w-full resize-none' placeholder='Short Description'/>
            </div>



            <div>
                <Button className='py-2 px-4'>Save Project</Button>
            </div>
        </form>
    </DashboardLayout>
  )
}

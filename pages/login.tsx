import React from 'react'
import { Button } from '../components/Buttons/Button'
import { Input } from '../components/Forms/Input'
import { FrontLayout } from '../layouts/front/FrontLayout'

export default function login() {
    return (
        <FrontLayout title='Admin Dashboard'>
            <div className="min-h-screen flex items-center justify-center">
                <div className='w-1/3 p-4 border border-black'>
                    <div className='mb-10'>
                        <h3 className='text-2xl uppercase font-semibold'>Login</h3>
                    </div>

                    <form action="" className='space-y-6'>
                        <div >
                            <label htmlFor="">Email Address</label>
                            <Input placeholder='Email Address' className='w-full' />
                        </div>
                        <div >
                            <label htmlFor="">Password</label>
                            <Input placeholder='Password' type={'password'} className='w-full' />
                        </div>

                        <div>
                            <Button className='w-full' >Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </FrontLayout>
    )
}

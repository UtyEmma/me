import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll'

export const Footer = () => {

    const [show, setShow] = React.useState(false)
    const [parent] = useAutoAnimate()

    useEffect(() => {
        setShow(window.scrollY > (window.document.body.scrollHeight / 2))
        window.addEventListener('scroll', () => {
            if(window.scrollY > (window.document.body.offsetHeight / 2) ){
                setShow(true)
            }else{
                setShow(false)
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {
                setShow(false)
            })
        }
    }, [])

    return (
        <>
            <div className='py-5 text-center'>
                <p className='text-;g'>Utibe-Abasi Emmanuel - &copy; {new Date().getFullYear()}</p>
            </div>

            <div ref={parent as any}>
                {
                    show 
                    
                    ?   

                    <div className="fixed bottom-4 right-4 transition-all duration-500">
                        <button onClick={() => animateScroll.scrollToTop()} className="rounded-full z-50 p-2 bg-purple-600">
                            <ChevronUpIcon className='w-6 my-0  text-white' />
                        </button>
                    </div>
                    :

                    ''
                }
            </div>
        </>
    )
}

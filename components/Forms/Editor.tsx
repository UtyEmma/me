import DOMPurify from 'dompurify'
import React, { FormEvent, useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

interface EditorModel {
    name: string,
    placeholder?: string,
    className?: string,
    defaultValue?: string
    onChange? : (e: {
        target: {
            name: string
            value: string
        },
        currentTarget: {
            name: string
            value: string
        }
    } | any) => any
}

const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  

export const Editor = ({name, placeholder, className, onChange, defaultValue = ""} : EditorModel) => {
    const [content, setContent] = useState(defaultValue)
    const editor : any = useRef()

    

    useEffect(() => {
        // editor.current.editor.container.classList.add("min-h-150px")
        // editor.current.editor.container.children[0].style.maxHeight = "h-64"
        // editor.current.editor.container.children[0].style.overflowY = "scroll"
        // editor.current.editor.container.children[0].classList.add("min-h-150px")
        // editor.current.editor.container.children[0].classList.add("max-h-150px")
    }, [])

    const handleChange = (value: string) => {
        setContent(value)
        onChange && onChange({
            currentTarget: {name, value},
            target: {name, value}
        })
    }

    return (
        <div className='position-relative pb-10'>
            <ReactQuill theme="snow" className='h-48' defaultValue={defaultValue} onChange={handleChange} modules={modules}  placeholder={placeholder} />
            <input name={name} value={content} readOnly hidden />
        </div>
    )
}
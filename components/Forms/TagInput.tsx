import React, { Attributes, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { ChangeEventData, TagData } from '@yaireo/tagify'
import Tags, { TagifyTagsReactProps } from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"


export const TagsInput = ({defaultValue, ...props} : TagifyTagsReactProps & {defaultValue?: any}) => {

    const input : any = useRef()
    const [tags, setTags] = useState<string>(defaultValue ?? "") 


    const onChange = (e: CustomEvent<ChangeEventData<TagData>>) => {
        setTags(e.detail.value)
    }        

    return (
        <>
            <Tags {...props} tagifyRef={input} defaultValue={defaultValue}  onChange={onChange} />
        </>
    )
}

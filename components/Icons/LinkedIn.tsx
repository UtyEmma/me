import React from 'react'

export const LinkedIn = ({size = 64, fill="#00000", ...props}: any) => {
    const title = props.title || "linkedin";
    return (
		<svg viewBox={`0 0 64 64`} className="fill-current" height={'auto'} width={size} xmlns="http://www.w3.org/2000/svg">
            <title>{title}</title>
            <g >
                <path d="M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z"/>
            </g>
        </svg>
    )
}

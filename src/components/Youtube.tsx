import React from 'react'

export default function Youtube() {
    return (
        <div className='flex justify-center bg-[#0f216d] glass p-5'>
            <iframe width="700" height="400" className='rounded-xl' src="https://www.youtube.com/embed/tAGnKpE4NCI?si=61ASPPNBEcF8h3sf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
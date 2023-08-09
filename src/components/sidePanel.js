import React from 'react'

export default function SidePanel(props) {
    return (
        <div className='sidepanel'>
            <img className='sidepanel--img' src={props.imgsrc} />
            <h1 className='sidepanel--header'>{props.name}</h1>
            <p className='sidepanel--content'>{props.content}</p>
        </div>
    )
}
import React from 'react'

export default function SidePanel(props) {
    return (
        <div className='sidepanel'>
            <div className='sidepanel--section'>
                <img className='sidepanel--img' src={props.imgsrc} />
                <h1 className='sidepanel--header'>{props.name}</h1>
            </div>
            <p className='sidepanel--content'>{props.content}</p>
        </div>
    )
}
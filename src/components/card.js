import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card--img' src={props.imgsrc} />
            <h1 className='card--header'>{props.header}</h1>
            <span className='card--blurb'>{props.blurb}</span>
        </div>
    )
}
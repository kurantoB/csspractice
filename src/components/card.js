import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card--img' src={props.imgsrc} />
            <div className='card--desc'>
                <h2 className='card--header'>{props.header}</h2>
                <span className='card--blurb'>{props.blurb}</span>
            </div>
        </div>
    )
}
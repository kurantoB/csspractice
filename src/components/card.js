import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card--img' src={props.imgsrc} />
            <div className='card--desc'>
                <h5 className='card--header'>{props.header}</h5>
                <span className='card--blurb'>{props.blurb}</span>
            </div>
        </div>
    )
}
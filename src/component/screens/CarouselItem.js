import React from 'react'

function CarouselItem(props) {
    const { height, url, width } = props
    return (
        <div className='carousel-item'>
            <img src={url? url : '#'} alt="no image" className='d-block w-100' style={{ height: '300px'}}/>
        </div>
    )
}

export default CarouselItem
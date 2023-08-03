import React from 'react'
import CarouselItem from './screens/CarouselItem'

function Artist(props) {
    const { id, name, popularity, images, genres, followers,  } = props

    return (
        <div className="col-md-4 col-lg-4 col-sm-6">
            <div className="card mt-2 mb-2">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div id="imgGrp" className="carousel slide" style={{ height: '200px'}} data-bs-ride="carousel" >
                            <div className="carousel-inner">
                                {
                                    images && images.map((item,index) => {
                                        return (
                                            <CarouselItem key={index} {...item} />
                                        )
                                    })
                                }

                                <button className="carousel-control-prev" data-bs-target="#imgGrp" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" data-bs-target="#imgGrp" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title"> { name } </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist
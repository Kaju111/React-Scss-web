import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/n1.jpg"
import img2 from "../assets/n2.jpg"


const Services = () => {
  return (
    <div>
      
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000}
    showThumbs={false}>

    <div>
     <img src={img1} alt="Item1" />
    <p className='legend'> Full Stack </p>
    </div>


    <div>
     <img src={img2} alt="Item2" />
    <p className='legend'> Perr-to-Perr Suport </p>
    </div>


    </Carousel>

    </div>
  )
}

export default Services

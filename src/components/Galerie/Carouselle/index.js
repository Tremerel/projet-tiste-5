import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../../assets/images/couverture/img-couverture-1.jpg'
import Image2 from '../../../assets/images/couverture/img-couverture-2.jpg'
import Image3 from '../../../assets/images/couverture/img-couverture-3.jpg'

const Carouselle = () => {



    const datas = [
        {
            id: 1,
            image: `${Image1}`,
        },
        {
            id: 2,
            image: `${Image2}`,
        },
        {
            id: 3,
            image: `${Image3}`,
        },
    ]


  return (
    <>
        <Carousel autoPlay interval={15000} infiniteLoop showThumbs={false} showStatus={false} >
        {datas.map(slide => (
            <div key={slide.id}>
                <img src={slide.image} alt=""/>
            </div>
        ))}
    </Carousel>
    </>
  )
}

export default Carouselle
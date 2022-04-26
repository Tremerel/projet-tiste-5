import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../../assets/images/couverture/img-couverture-1.jpg'
import Image2 from '../../../assets/images/couverture/img-couverture-2.jpg'
import Image3 from '../../../assets/images/couverture/img-couverture-3.jpg'
import Logo from '../../../assets/images/logo/logo.svg'

import './index.scss'

const Slider = () => {
    

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
        <div className="slider-container">

            <Carousel autoPlay interval={15000} infiniteLoop showThumbs={false} showStatus={false} animationHandler="fadeIn">
                {datas.map(slide => (
                    <div key={slide.id}>
                        <img src={slide.image} alt=""/>
                    </div>
                ))}
            </Carousel>
            <div className="logo">

                <img src={Logo} alt="" />
                <p>Aménager ou réaménager son jardin ? Laissez-nous créer ce qui vous plaît. De la simple modification aux aménagements les plus complexes, notre entreprise saura vous conseiller pour réaliser vos envies.</p>
            </div>
        </div>
        </>
    )
}


export default Slider
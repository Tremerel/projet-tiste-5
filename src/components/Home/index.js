
import './index.scss'
import LogoS from '../../assets/images/logo/logo.svg'
import Image1 from '../../assets/images/couverture/img-couverture-2.jpg'
import Slider from './Slider';
import Footer from '../Footer';
import Loader from 'react-loaders';
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        var clientView = document.documentElement.clientWidth

        if(clientView > 768){
            Aos.init({
                duration: 1200,
                once: true,
            });
        } else if (clientView < 768) {
            Aos.init({
                disable: true,
            });
        }

    },)
    
    return (
        <>
        <section>
            <div className='container'>

                <Slider/>

                <div className="content-container">
                    <div className="title">
                        <h1>Nos Services</h1>
                    </div>

                    <div className="img-content-2" id="entretient" data-aos="fade-right">
                        <img src={Image1} alt=""/>
                    </div>
                    <div className="content-2" data-aos="fade-left">
                        <h2>Entretien</h2>
                        <p>Pour profiter totalement de votre jardin toute l’année, il faut en prendre soin. Ces petites plantes sont vivantes, et on besoin de l’intervention d’un jardinier qualifié qui veillera à leur bonne santé et qui exploitera le meilleur d'elle-même.</p>
                        <p>Un entretien régulier assure à vos plantes une croissance optimale et une santé solide. Il permet de réagir rapidement aux différents besoins et contraintes de votre espace. </p>
                        <p>Un suivis de votre jardin s'inscrit dans une suite logique de la création.</p>   
                    </div>

                    <div className="img-content-3" id="creation" data-aos="fade-left">
                        <img src={Image1} alt=""/>
                    </div>
                    <div className="content-3" data-aos="fade-right">
                        <h2>Creation</h2>
                        <p>L’aménagement extérieur et la création de jardin est un véritable art. Chez La rose des vents nous possédons le savoir-faire adéquat pour donner vie à vos envies.</p>
                        <p>L’étude paysagère vous permet d’évaluer la superficie, la configuration et l’exposition de la zone à aménager afin de créer une harmonie entre vous et votre extérieur.</p>
                    </div>
                    </div>

                    <div className="button">
                    <a href="contact.html">Contact Nous !</a>
                    </div>

                <Footer/>

            </div>

        </section>

        <Loader type="cube-transition"/>


        </>
    );
}

export default Home
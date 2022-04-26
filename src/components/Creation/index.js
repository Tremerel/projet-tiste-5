import Loader from 'react-loaders'
import React from 'react'
import Image1 from '../../assets/images/couverture/img-couverture-1.jpg'
import './index.scss'
import Footer from './../Footer'
import { useState } from 'react'

const Galerie = () => {

    const [toggleTabs, setToggleTabs] = useState(1);

    const [toggleNavs, setToggleNavs] = useState(0);

    const toggleNav = (index) => {
        setToggleNavs(index)
    }

    const toggleTab = (index) => {
        setToggleTabs(index)
    }

  return (

    <>
        <div className="box">



            <div className="tab-container" >
                <div className="tabs one" onClick={() => toggleTab(1)}>Maçonnerie</div>
                <div className="tabs two" onClick={() => toggleTab(2)}>Arrosages-automatiques</div>
                <div className="tabs three" onClick={() => toggleTab(3)}>Plantation</div>
                <div className="tabs four" onClick={() => toggleTab(4)}>Terrassement</div>
            </div>

            <div className="contenu-onglets">

                <div className={toggleTabs === 1 ? 'content active-content reverse' : 'content reverse'}>

                    <div className="left">
                        <img src={Image1} alt="" />
                    </div>

                    <div className="right">
                    <h2>Maçonnerie</h2>
            <p>Avant la partie végétale il est souvent nécessaire d’avoir recours à de la maçonnerie paysagère telle que la création du murets, pavage, dallage, pose de graviers.</p>

                        <div className="button">
                            <a>Contact</a>
                        </div>
                    </div>

                </div>

                <div className={toggleTabs === 2 ? 'content active-content' : 'content'}>

                    <div className="left">
                        <img src={Image1} alt="" />
                    </div>

                    <div className="right">
                    <h2>Arrosages-automatiques</h2>
            <p>A l’aménagement d’un jardin, il est nécessaire d’avoir un arrosage automatique adapté pour subvenir au besoin en eau.</p>
            <p>Pose d’un programmateur, electrovannes, goutte à goutte, aspersion, mais aussi dosatron pour les murs végétaux, nous pouvons tout mettre en œuvre.</p>
            <p>Nous sommes aussi là pour la maintenance et le réglage de l’arrosage : programmation, réparation et réglage adapté.</p>

                        <div className="button">
                            <a>Contact</a>
                        </div>
                    </div>

                </div>

                <div className={toggleTabs === 3 ? 'content active-content reverse' : 'content reverse'}>

                    <div className="left">
                        <img src={Image1} alt="" />
                    </div>

                    <div className="right">
                    <h2>Plantation</h2>
            <p>Enfin vient la plantation, choix et disposition de végétaux adaptés, couleur, formes, volumes, perspectives seront nos maîtres mots.</p>

                        <div className="button">
                            <a>Contact nous !</a>
                        </div>
                    </div>

                </div>
                
                <div className={toggleTabs === 4 ? 'content active-content' : 'content'}>

                    <div className="left">
                        <img src={Image1} alt="" />
                    </div>

                    <div className="right">
                    <h2>Terrassement</h2>
            <p>Commencer par le commencement !</p>
            <p>Remise à niveau si nécessaire, aplanissement du terrain ou création de pente adéquate, décaissement, tranchées sont dans nos cordes.</p>
                        <div className="button">
                            <a>Contact</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <Footer/>
        
        <Loader type="cube-transition" />
    </>
  )
}


export default Galerie
import Loader from 'react-loaders'
import React from 'react'
import Image1 from '../../assets/images/creation/creation/photo-creation-1.jpg'
import Image2 from '../../assets/images/couverture/img-couverture-1.jpg'
import Image3 from '../../assets/images/couverture/img-couverture-1.jpg'
import './index.scss'
import Footer from './../Footer'
import Carouselle from './Carouselle'
import { useState } from 'react'


const Galerie = () => {

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
    <div className="container-of-galerie">

        <div class="grid-galerie">

        <div class="galerie-container w-1 h-2">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-1 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-3 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-2 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-1 h-3">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-1 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-1 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>
        <div class="galerie-container w-2 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        <div class="galerie-container w-3 h-1">
            <div class="galerie-item">
                <div class="item">
                                <img src={Image1} alt="" />
                </div>
            </div>
        </div>

        </div>
        <Carouselle/>
    </div>



        <Footer/>
        
        <Loader type="cube-transition" />
    </>
  )
}


export default Galerie
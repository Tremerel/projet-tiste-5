import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo/logo-minimal-horizontale.svg'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

    const [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)
    }

    // const [state2, setState2] = useState(false)

    // const toggle2 = () => {
    //     setState2(!state2)
    // }

    // const [state3, setState3] = useState(false)

    // const toggle3 = () => {
    //     setState3(!state3)
    // }



    return (

        <header className="header">

            <Link className="logo" to='/'>
                <img src={LogoS} alt="logo" />
            </Link>

            <div onClick={toggle} className="menu-toggle">
                {state ? <FontAwesomeIcon icon={faXmark} color="#4d4d4e" /> : <FontAwesomeIcon icon={faBars} color="#4d4d4e" />}
            </div>


            <nav className={state ? 'active' : ''} >
                <ul>
                    <li><NavLink exact="true"to='/'>Acceuil</NavLink></li>
                    <li class="sub-menu" >
                        <NavLink exact="true" activeclassname="active" to='/Entretient'>Entretient</NavLink>

                    </li>
                    
                    <li class="sub-menu">
                        <NavLink exact="true" activeclassname="active" to='/Creation'>Création</NavLink>

                    </li>

                    <li><NavLink exact="true" activeclassname="active" to='/Galerie'>Galerie</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to='/Contact'>Contact</NavLink></li>
                </ul>
            </nav>

            <div class="clearfix"></div>
        </header>

    )
}

export default Sidebar
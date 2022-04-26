import './index.scss'
import LogoFooter from '../../assets/images/logo/logo-minimal-noir.svg'

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt=""/>
            <div className="text">
                <p> © Copyright <a href="http://tremdev.com">TremDev</a>  2022.</p>
                <p> © Copyright <a href="http://maelwenn.com">Maelwenn.com</a>  2022.</p>
            </div>
        </footer>
    )
}

export default Footer
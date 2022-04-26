import Loader from 'react-loaders'
import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
  

  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          'service_v3hu88n',
          'template_fu2xkpx',
          form.current,
          'gGXVtKLpZJSAaG0Kq'
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }
    return (
        <>
            <div className='container contact-page'>

                <div className='text-zone'>
                    <div className='info'>
                    <p>
                    I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>
                    </div>
                    
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="user_name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="user_email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li className='flat-button'>
                            <input type="submit" value="Envoyer" />
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Tremerel kevin
                    <br/>
                    France,
                    <br/>
                    15 Avenue Léo Imbert, 06100 <br/>
                    Nice - Nord <br/>
                    <span>tremdev@protonmail.com</span>

                </div>

                <div className='map-wrap'>
                    <MapContainer center={[43.723643, 7.254696]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.723643, 7.254696]}>
                        <Popup>Kevin lives here, come over for a cup of coffee :</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>


            <Loader type="cube-transition" />
        
        </>
    )
}

export default Contact
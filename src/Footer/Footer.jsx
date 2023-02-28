import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaYoutube, FaPinterest } from 'react-icons/fa'
import style from './Footer.module.css'

function Footer({textColor}) {
    return (
        <footer className={style.footer}>
            <div className={style.footerSection1}>
                <div className={style.contacts} >
                    <h3 className={style.contactsName} style={{ color: "white" }}>MAELSTORM</h3>
                    <ul className={style.section} style={{ color: "white" }}>
                        <li className={style.contact}><FaPhoneAlt style={{color:textColor}} className={style.icon} />641-754-0072</li>
                        <li className={style.contact}><FaEnvelope style={{color:textColor}} className={style.icon} />GavinEMaki@rhyta.com</li>
                        <li className={style.contact}><FaMapMarkerAlt style={{color:textColor}} className={style.icon} />1718 Park Boulevard</li>
                    </ul>
                </div>
                <div className={style.sections}>
                    <h3 className={style.sectionsName}>FEATURES</h3>
                    <ul className={style.section}>
                        <li>Pricing</li>
                        <li>Education</li>
                        <li>Refer a Friend</li>
                        <li>Updates</li>
                        <li>Beta</li>
                    </ul>
                </div>
                <div className={style.sections}>
                    <h3 className={style.sectionsName}>COMPANY</h3>
                    <ul className={style.section}>
                        <li>Design</li>
                        <li>Prototype</li>
                        <li>Collaborate</li>
                        <li>Sketch</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
                <div className={style.sections}>
                    <h3 className={style.sectionsName}>GET STARTED</h3>
                    <ul className={style.section}>
                        <li>Tutorials</li>
                        <li>Resources</li>
                        <li>Guides</li>
                        <li>Example</li>
                        <li>Docs</li>
                    </ul>
                </div>
                <div className={style.registration}>
                    <h3 className={style.sectionsName}>REGISTRATION</h3>
                    <form action="">
                        <input style={{ width: "100%", height: 40, border: 'none', background: '#63686E' }} type="text" placeholder='Name' />
                        <input style={{ width: "100%", height: 40, border: 'none', background: '#63686E' }} type="email" placeholder='Email' />
                        <button className={style.subscribeButton} style={{ width: "100%", height: 40 }}>SUBSRIBE</button>
                    </form>
                </div>
            </div>
            <div className={style.footerInfo}>
                <div><p>© All rights reserved</p></div>
                <div style={{display:'flex',gap:20}}>
                    <FaTwitter className={style.contactsIcons} />
                    <FaFacebookF className={style.contactsIcons} />
                    <FaYoutube className={style.contactsIcons} />
                    <FaPinterest className={style.contactsIcons} />
                </div>
            </div>
        </footer>
    )
}
export default Footer;
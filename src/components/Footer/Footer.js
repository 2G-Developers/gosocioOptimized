import React from 'react'

import { Link } from 'gatsby'

import Facebook from '../../images/svg/facebook.svg'
import Instagram from '../../images/svg/instagram.svg'
import Linkedin from '../../images/svg/linkedin.svg'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__wrapper">
                        <ul className="footer__nav">
                            <li className="footer__item">
                                <Link activeStyle={{color: "#EB4D37" }} to="/" className="footer__link">Home</Link>
                            </li>
                            <li className="footer__item">
                                <Link activeStyle={{color: "#EB4D37" }} to="/about" className="footer__link">About Us</Link>
                            </li>
                            <li className="footer__item">
                                <Link activeStyle={{color: "#EB4D37" }} to="/contact" className="footer__link">Contact</Link>
                            </li>
                        </ul>

                        <span className="footer__text">© 2020 Go Sociobutterfly. All rights reserved.</span>

                        <ul className="footer__nav">
                            <li className="footer__item footer__item--icon">
                                <a href="https://instagram.com/gosociobutterfly?igshid=1x6vyl7dz6e6h" target="_blank" rel="noreferrer" className="footer__link">
                                    <img className="footer__item--img" src={Instagram} alt="Instagram" style={{width: "1rem", height:"1rem"}} />
                                </a>
                            </li>
                            <li className="footer__item footer__item--icon">
                                <a href="https://www.facebook.com/gosociobutterfly" target="_blank" rel="noreferrer" className="footer__link">
                                    <img className="footer__item--img" src={Facebook} alt="Facebook" style={{width: "1rem", height:"1rem"}} />
                                </a>
                            </li>
                            <li className="footer__item footer__item--icon">
                                <a href="https://www.linkedin.com/company/go-socialbutterfly" target="_blank" rel="noreferrer" className="footer__link">
                                    <img className="footer__item--img" src={Linkedin} alt="Linkedin" style={{width: "1rem", height:"1rem"}} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

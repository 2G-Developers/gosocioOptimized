import React, { useState } from 'react'
import { Link } from 'gatsby'

import logo from '../../images/svg/logo.svg'
import logo2 from '../../images/svg/logo-2.svg'

const Navbar = ({isSecondary = false,class1="navbar-list", class2="navbar-list", class3="navbar-list",color='#fff'}) => {
    const [showNav,setShownav ] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className="nav">
            <div className={navbar ? 'navbar active-nav': 'navbar'} style={{background: `${ navbar ? color : 'transparent'}`}}>
                {isSecondary ? null : <Link to="/"><img className="logo" src={logo} alt="logo"/></Link> }
                {isSecondary ? <Link to="/"><img className="logo" src={logo2} alt="logo"/></Link> : null }
                {/* eslint-disable-next-line */
                                    }<div className="navbar-hamburg" role="button" onClick={()=>setShownav(!showNav)} onKeyDown={()=>setShownav(!showNav)}>
                    <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
                    <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
                    <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
                </div>
            </div>  
            <div className="navbar-page" style={{display: showNav ? 'block' : 'none' }}>
                {/* eslint-disable-next-line */
                                    }<div id="mdiv" onClick={()=>setShownav(!showNav)} onKeyDown={()=>setShownav(!showNav)}>
                    <div className="mdiv">
                        <div className="md"></div>
                    </div>
                </div>
                <div className="navbar-content">
                    <Link to="/" className={class1}>Home</Link>
                    <Link to="/about" className={class2}>About</Link>
                    <Link to="/contact" className={class3}>Contact</Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar

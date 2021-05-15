import React, { useState, useEffect }from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png'


function Header() {

    const [header, SetHeader] = useState(false)
    const [showButton, SetShowButton] = useState(false)
    const [whiteSwitch, SetwhiteSwitch] = useState(false)
    const [LogoImg, SetLogoImg] = useState(false)
    const [LogoText, setLogoText] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 120){
            SetHeader(true)
        } else {
            SetHeader(false)
        }
    }

    const showServiceButton = () => {
        if(window.scrollY >= 350){
            SetShowButton(true)
        } else {
            SetShowButton(false)
        }
    }

    const changeFromWhite = () => {
        if(window.scrollY >= 120){
            SetwhiteSwitch(true)
        } else {
            SetwhiteSwitch(false)
        }
    }

    const LogoTextSwitch = () => {
        if(window.scrollY >= 120){
            setLogoText(true)
        } else {
            setLogoText(false)
        }
    }

    const LogoSwitch = () => {
        if(window.scrollY >= 120){
            SetLogoImg(true)
        } else {
            SetLogoImg(false)
        }
    }


    console.log(window.scrollY)
    

    

    window.addEventListener('scroll', changeBackground)
    window.addEventListener('scroll', showServiceButton)
    window.addEventListener('scroll', changeFromWhite)
    window.addEventListener('scroll', LogoTextSwitch)
    window.addEventListener('scroll', LogoSwitch)
  

    return (
        <div className={header ? 'header active' : 'header'}>
            <div className="logo-cont">
                <Link className="logo-link">
                  <img className={LogoImg ? "logo active" : 'logo'} src={Logo} alt=""/>
                  <h1 className={LogoText ? "logo-txt active" : "logo-txt"}>SMARTHUBJA</h1>
                </Link>
                {/* logo active
                    logo-txt active */}
            </div>

            <div className="nav">
                <Link className="nav-link">
                    <p className={whiteSwitch ? 'nav-link-text active' : 'nav-link-text'}>Our services</p>
                </Link>

                <Link className="nav-link">
                    <p className={whiteSwitch ? 'nav-link-text active' : 'nav-link-text'}>Pricing</p>
                </Link>

                <Link className="nav-link">
                    <p className={whiteSwitch ? 'nav-link-text active' : 'nav-link-text'}>Info Hub</p>
                </Link>

                <Link className="nav-link">
                    <p className={whiteSwitch ? 'nav-link-text active' : 'nav-link-text'}>Members</p>
                </Link>

                <Link className="nav-link">
                    <button className={showButton ? "nav-btn active" : 'nav-btn'}>Book a Service</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;

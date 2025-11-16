import React from 'react'
import TopBar from './TopBar'
import ButtonStandard from './ButtonStandard'
import Navigation from './Navigation'
import LogoType from '/src/assets/storaid-logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <TopBar/>
        <div className="headerContainer container mx-auto py-4">

            <div className="logo">
              <Link to="/">
                <img src={LogoType} alt='StorAid logo'/>
              </Link>
            </div>
            <Navigation />
              <ButtonStandard to="/booking">Book Now</ButtonStandard>
        </div>
    </header>
  )
}

export default Header
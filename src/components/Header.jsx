import React from 'react'
import TopBar from './TopBar'
import ButtonStandard from './ButtonStandard'
import Navigation from './Navigation'

function Header() {
  return (
    <>
        <TopBar/>
        <div className="headerContainer container mx-auto py-4">

            <div className="logo"><img src="src/assets/storaid-logo.svg"/></div>
            {/* ⚠️  React router behövs här för länkarna */}
            <Navigation />
            <ButtonStandard label="Book Now"/>

        </div>
    </>
  )
}

export default Header
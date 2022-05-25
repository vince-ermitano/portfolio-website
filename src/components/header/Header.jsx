import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/killua-coffee.png'
import ME from '../../assets/image-46508.png'
// import ME from '../../assets/pfp.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vince Ermitano</h1>
        <h5 className="text-light">Computer Science Undergrad at UCSD</h5>
        <CTA />
        {/* <HeaderSocials /> */}

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header
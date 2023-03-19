import React from 'react'


const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">David</a>

        <div className='nav__menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                <i className='uil uil-home nav__icon'>Home</i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='uil uil-user nav__icon'>David</i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <i className='uil uil-graduation-cap nav__icon'>Skills</i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <i className='uil uil-briefcase-alt nav__icon'>Services</i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <i className='uil uil-transaction nav__icon'>Portfolio</i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='uil uil-message nav__icon'>Contact</i>
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav__icon'></i>
        </div>
        <div className='nav__toggle'>
        <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
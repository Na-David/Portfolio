import React, {useState} from 'react'
import "./Header.css";


const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });


  const [toggle, showMenue] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">David</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                <i className='uil uil-home nav__icon'></i>Home
              </a>
            </li>

            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='uil uil-user nav__icon'></i>David
              </a>
            </li>

            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <i className='uil uil-graduation-cap nav__icon'></i>Skills
              </a>
            </li>

            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <i className='uil uil-briefcase-alt nav__icon'></i>Services
              </a>
            </li>

            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <i className='uil uil-backpack nav__icon'></i>Portfolio
              </a>
            </li>

            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='uil uil-message nav__icon'></i>Contact
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav__icon' onClick={() => showMenue(!toggle)}></i>
        </div>
        <div className='nav__toggle' onClick={() => showMenue(!toggle)}>
        <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
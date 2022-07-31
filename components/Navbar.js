import Link from 'next/link'
import style from '../styles/navbar.module.scss'

import { useState, useEffect } from 'react'

export default function Navbar(elem) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [burgerfied, setBurgerfication] = useState(false)

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)
  const closeHamburger = () => setHamburgerOpen(false)

  const toggleBurgerfication = () => {
    if (elem.element.current.scrollTop > 50) setBurgerfication(true)
    else setBurgerfication(false)
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', toggleBurgerfication)
    return () => {
      elem.element.current.removeEventListener('scroll', toggleBurgerfication)
    }
  })

  return (
    <div className={burgerfied ? style.burgerfied : ''}>
      <div className={style.hamburgerContainer}>
        <div className={style.hamburgerContainerInner}>
          <div className={style.hamburger} onClick={toggleHamburger}>
            <div
              className={`${style.burger} ${style.burger1} ${
                hamburgerOpen ? style.open : style.closed
              }`}
            />
            <div
              className={`${style.burger} ${style.burger2} ${
                hamburgerOpen ? style.open : style.closed
              }`}
            />
            <div
              className={`${style.burger} ${style.burger3} ${
                hamburgerOpen ? style.open : style.closed
              }`}
            />
          </div>
        </div>
      </div>
      <nav
        className={`${style.nav} ${hamburgerOpen ? style.open : style.closed}`}
      >
        <div className={style.navInner}>
          <div className={style.home}>
            <Link href="/#home" passHref>
              <a
                className={`${style.link} ${style.homelink}`}
                onClick={closeHamburger}
              >
                ac
              </a>
            </Link>
          </div>
          <div className={style.menu}>
            <div className={style.menuItem}>
              <Link href="/#work" passHref>
                <a className={style.link} onClick={closeHamburger}>
                  work
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              <Link href="/#about" passHref>
                <a className={style.link} onClick={closeHamburger}>
                  about
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              <Link href="/#contact" passHref>
                <a className={style.link} onClick={closeHamburger}>
                  contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

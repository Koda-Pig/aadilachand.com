import Link from 'next/link'
import style from '../styles/navbar.module.scss'

import { useState, useEffect } from 'react'

export default function Navbar(elem) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isMinimised, setMinimised] = useState(false)

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  const toggleMinimised = () => {
    if (elem.element.current.scrollTop > 50) setMinimised(true)
    else setMinimised(false)
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', toggleMinimised)
    return () => {
      elem.element.current.removeEventListener('scroll', toggleMinimised)
    }
  })

  return (
    <>
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
      <nav
        className={`
          ${style.nav}
          ${isMinimised ? style.minimised : ''}
          ${hamburgerOpen ? style.open : style.closed}
        `}
      >
        <div className={style.navInner}>
          <div className={style.home}>
            <Link href="/#home" passHref>
              <a
                className={`${style.link} ${style.homelink}`}
                onClick={toggleHamburger}
              >
                ac
              </a>
            </Link>
          </div>
          <div className={style.menu}>
            <div className={style.menuItem}>
              <Link href="/#work" passHref>
                <a className={style.link} onClick={toggleHamburger}>
                  work
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              <Link href="/#about" passHref>
                <a className={style.link} onClick={toggleHamburger}>
                  about
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              <Link href="/#contact" passHref>
                <a className={style.link} onClick={toggleHamburger}>
                  contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

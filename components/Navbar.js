import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

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
        className={`${style.nav} ${hamburgerOpen ? style.open : style.closed}`}
      >
        <div className={style.innerNav}>
          <div className={style.home}>
            <Link href="#home" passHref>
              <a
                className={`${style.link} ${style.homelink}`}
                onClick={toggleHamburger}
              >
                ac
              </a>
            </Link>
          </div>
          <div className={style.menu}>
            <Link href="#work" passHref>
              <a
                className={`${style.link} ${style.active}`}
                onClick={toggleHamburger}
              >
                work
              </a>
            </Link>
            <Link href="#about" passHref>
              <a className={style.link} onClick={toggleHamburger}>
                about
              </a>
            </Link>
            <Link href="#contact" passHref>
              <a className={style.link} onClick={toggleHamburger}>
                contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

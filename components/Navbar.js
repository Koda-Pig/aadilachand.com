import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isVisible, setVisible] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleVisbility = () => {
    if (window.pageYOffset > 100) setVisible(true)
    else setVisible(false)
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisbility)
    return () => {
      window.removeEventListener('scroll', toggleVisbility)
    }
  }, [])

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
        className={`${style.nav} ${isVisible ? style.showBg : style.hideBg} ${
          hamburgerOpen ? style.open : style.closed
        }`}
      >
        <div className={style.innerNav}>
          <div className={style.home}>
            <Link href="#home" passHref>
              <a className={style.link} onClick={toggleHamburger}>
                home
              </a>
            </Link>
          </div>
          <div className={style.menu}>
            <Link href="#work" passHref>
              <a className={style.link} onClick={toggleHamburger}>
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

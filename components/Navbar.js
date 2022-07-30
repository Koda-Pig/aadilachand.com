import Link from 'next/link'
import Image from 'next/image'
import star from '../public/images/star.svg'
import style from '../styles/navbar.module.scss'
import MenuCtx from './MenuCtx'
import { useState, useContext, useEffect } from 'react'

export default function Navbar(elem) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [burgerfied, setBurgerfication] = useState(false)

  const { currentSection } = useContext(MenuCtx)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const toggleBurgerfication = () => {
    if (elem.element.current.scrollTop > 50) {
      setBurgerfication(true)
    } else {
      setBurgerfication(false)
    }
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', toggleBurgerfication)
    return () => {
      elem.element.current.removeEventListener('scroll', toggleBurgerfication)
    }
  })

  return (
    <div className={burgerfied ? style.burgerfied : ''}>
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
              <Image
                src={star}
                width={17}
                height={30}
                className={`${style.star} ${
                  currentSection.includes('work')
                    ? style.visible
                    : style.invisible
                }`}
                alt="star"
              />
              <Link href="/#work" passHref>
                <a
                  className={`${style.link} ${style.active}`}
                  onClick={toggleHamburger}
                >
                  work
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              {' '}
              <Image
                src={star}
                width={17}
                height={30}
                className={`${style.star} ${
                  currentSection.includes('about')
                    ? style.visible
                    : style.invisible
                }`}
                alt="star"
              />
              <Link href="/#about" passHref>
                <a className={style.link} onClick={toggleHamburger}>
                  about
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              {' '}
              <Image
                src={star}
                width={17}
                height={30}
                className={`${style.star} ${
                  currentSection.includes('contact')
                    ? style.visible
                    : style.invisible
                }`}
                alt="star"
              />
              <Link href="/#contact" passHref>
                <a className={style.link} onClick={toggleHamburger}>
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

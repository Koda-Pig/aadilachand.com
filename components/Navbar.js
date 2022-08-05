import Link from 'next/link'
import style from '../styles/navbar.module.scss'
import { useState, useEffect } from 'react'

const sections = ['work', 'about', 'contact']

export default function Navbar(elem) {
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isMinimised, setMinimised] = useState(false)

  const menuItems = sections.map((section, index) => {
    return (
      <div className={style.menuItem} key={index}>
        <Link href={'/#' + section} passHref>
          <a className={style.link} onClick={toggleHamburger}>
            {section}
          </a>
        </Link>
      </div>
    )
  })

  const burger = (
    <div
      className={`${style.burger} ${hamburgerOpen ? style.open : style.closed}`}
    />
  )
  const hamburger = [burger, burger, burger]

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
        {hamburger}
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
          <div className={style.menu}>{menuItems}</div>
        </div>
      </nav>
    </>
  )
}

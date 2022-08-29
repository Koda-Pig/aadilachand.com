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
          <a className={style.link} onClick={toggleHamburger} title={section}>
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

  const toggleMinimised = () => {
    if (elem.element.current.scrollTop > 50) setMinimised(true)
    else setMinimised(false)
  }

  useEffect(() => {
    const instance = elem.element.current
    instance.addEventListener('scroll', toggleMinimised)
    return () => {
      instance.removeEventListener('scroll', toggleMinimised)
    }
  })

  return (
    <>
      <div className={style.hamburger} onClick={toggleHamburger}>
        {burger} {burger} {burger}
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
                className={style.homelink}
                onClick={toggleHamburger}
                title="home"
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

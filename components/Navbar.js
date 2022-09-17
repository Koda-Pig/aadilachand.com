import Link from 'next/link'
import styles from '../styles/navbar.module.scss'
import { useState, useEffect } from 'react'

const sections = ['work', 'about', 'contact']

export default function Navbar(elem) {
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isMinimised, setMinimised] = useState(false)

  const menuItems = sections.map((section, index) => {
    return (
      <div className={styles.menuItem} key={index}>
        <Link href={'/#' + section} passHref>
          <a className={styles.link} onClick={toggleHamburger} title={section}>
            {section}
          </a>
        </Link>
      </div>
    )
  })

  const burger = (
    <div
      className={`${styles.burger} ${
        hamburgerOpen ? styles.open : styles.closed
      }`}
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
      <div className={styles.hamburger} onClick={toggleHamburger}>
        {burger} {burger} {burger}
      </div>
      <nav
        className={`
          ${styles.nav}
          ${isMinimised ? styles.minimised : ''}
          ${hamburgerOpen ? styles.open : styles.closed}
        `}
      >
        <div className={styles.navInner}>
          <div className={styles.home}>
            <Link href="/#home" passHref>
              <a
                className={styles.homelink}
                onClick={toggleHamburger}
                title="home"
              >
                ac
              </a>
            </Link>
          </div>
          <div className={styles.menu}>{menuItems}</div>
        </div>
      </nav>
    </>
  )
}

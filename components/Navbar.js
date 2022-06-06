import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import star from '../public/star.png'

export default function Navbar(elem) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isVisible, setVisible] = useState([])

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const toggleVisbility = () => {
    const element = elem.element.current.scrollTop
    if (element > 500 && element < 1500) setVisible(() => ['work'])
    else if (element > 1500 && element < 2000) setVisible(() => ['about'])
    else if (element > 2000) setVisible(() => ['contact'])
    else setVisible(() => [])
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', toggleVisbility)
    return () => {
      elem.element.current.removeEventListener('scroll', toggleVisbility)
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
            <div className={style.menuItem}>
              <Image
                src={star}
                width={20}
                height={31}
                className={`${style.star} ${
                  isVisible.includes('work') ? style.visible : style.invisible
                }`}
                alt="star"
              />
              <Link href="#work" passHref>
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
                width={20}
                height={31}
                className={`${style.star} ${
                  isVisible.includes('about') ? style.visible : style.invisible
                }`}
                alt="star"
              />
              <Link href="#about" passHref>
                <a className={style.link} onClick={toggleHamburger}>
                  about
                </a>
              </Link>
            </div>
            <div className={style.menuItem}>
              {' '}
              <Image
                src={star}
                width={20}
                height={31}
                className={`${style.star} ${
                  isVisible.includes('contact')
                    ? style.visible
                    : style.invisible
                }`}
                alt="star"
              />
              <Link href="#contact" passHref>
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

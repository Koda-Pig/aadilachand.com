import style from '../styles/about.module.css'
import Link from 'next/link'
import { useRef, useEffect, useContext } from 'react'
import { MenuContext } from './MenuContext'

export default function About(elem) {
  const container = useRef(null)
  const { currentSection, setCurrentSection } = useContext(MenuContext)

  const setCurrent = () => {
    // console.log(container.current.getBoundingClientRect().top)
    // console.log(currentSection)

    if (container.current.getBoundingClientRect().top <= 1)
      setCurrentSection(() => ['about'])
    else setCurrentSection((arr) => arr.filter((item) => item !== 'about'))
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', setCurrent)
    return () => {
      elem.element.current.removeEventListener('scroll', setCurrent)
    }
  })

  return (
    <div className={style.about} id="about" ref={container}>
      <div className={style.container}>
        <section className={style.section}>
          <h2>conceptual design</h2>
          <p>
            environment contiunues to degrade, there is a need for a more
            sustainable mindset all-around somethimh somETHINH
          </p>
          <p>
            given that everything we interactact with seeps into our subconcous
            and ripples outwards into other aspects of our life, it is important
            to consider the natural world within a digital frame.&nbsp;
            <Link href="#" passHref>
              <a className={style.link}>read more</a>
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}

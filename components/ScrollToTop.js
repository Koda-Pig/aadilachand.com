import { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import style from '../styles/scroll.module.scss'

export default function ScrollToTop(elem) {
  const [isVisible, setVisible] = useState(false)

  const toggleVisbility = () => {
    if (elem.element.current.scrollTop > 300) setVisible(true)
    else setVisible(false)
  }

  const scrollToTop = () => {
    elem.element.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const instance = elem.element.current
    instance.addEventListener('scroll', toggleVisbility)
    return () => {
      instance.removeEventListener('scroll', toggleVisbility)
    }
  })

  return (
    <>
      <div
        title="back to top"
        onClick={scrollToTop}
        className={`${style.backToTop} ${
          isVisible ? style.visible : style.invisible
        }`}
      >
        <BsArrowUp />
        <span>
          back
          <br />
          to top
        </span>
      </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
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
    elem.element.current.addEventListener('scroll', toggleVisbility)
    return () => {
      elem.element.current.removeEventListener('scroll', toggleVisbility)
    }
  })

  return (
    <>
      <BsFillArrowUpCircleFill
        title="back to top"
        onClick={scrollToTop}
        className={`${style.scrollIcon} ${
          isVisible ? style.visible : style.invisible
        }`}
      />
    </>
  )
}

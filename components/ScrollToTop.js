import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import style from '../styles/scroll.module.css'

// this isn't working because it's built to work with scroll on body element,
// not with scroll on a specific element

export default function ScrollToTop(params) {
  console.log(params.element.current)
  const elem = params.element.current

  const [isVisible, setVisible] = useState(false)

  const toggleVisbility = (e) => {
    if (elem.scrollTop > 300) setVisible(true)
    else setVisible(false)
  }

  const scrollToTop = () => {
    elem.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisbility)
    return () => {
      window.removeEventListener('scroll', toggleVisbility)
    }
  })

  return (
    <>
      <BsFillArrowUpCircleFill
        onClick={scrollToTop}
        className={`${style.scrollIcon} ${
          isVisible ? style.visible : style.invisible
        }`}
      />
    </>
  )
}

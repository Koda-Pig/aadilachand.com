import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import style from '../../styles/home/hero.module.scss'
import star from '../../public/images/star.svg'

export default function Hero(elem) {
  const [isVisible, setVisible] = useState(true)

  const toggleVisbility = () => {
    if (elem.element.current.scrollTop > 50) setVisible(false)
    else setVisible(true)
  }

  useEffect(() => {
    const instance = elem.element.current
    instance.addEventListener('scroll', toggleVisbility)
    return () => {
      instance.removeEventListener('scroll', toggleVisbility)
    }
  })

  const scrollDown = () => {
    elem.element.current.scrollBy(0, window.innerHeight)
  }

  return (
    <div className={style.hero} id="home">
      <div className={style.heroText}>
        <i className={style.star}>
          <Image src={star} width={21} height={38} alt="ADD DESCRIPTION" />
        </i>
        <h1 className={style.heading}>aadila chand</h1>
        <h2 className={style.subheading}>conceptual design</h2>
      </div>
      <BsChevronDown
        onClick={scrollDown}
        className={`${style.chevron} ${
          isVisible ? style.visible : style.invisible
        }`}
      />
    </div>
  )
}

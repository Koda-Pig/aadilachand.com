import style from '../styles/work.module.css'
import Image from 'next/image'
import uiCircle from '../public/ui-circle.png'
import illustrationCircle from '../public/illustration-circle.png'
import fineArtCircle from '../public/fine-art-circle.png'
import { useRef, useEffect, useContext } from 'react'
import { menuContext } from './menuContext'

export default function Work(elem) {
  // need to move this navbar stuff to index or navbar component
  const container = useRef(null)
  const { setCurrentSection } = useContext(menuContext)

  const setCurrent = () => {
    if (container.current.getBoundingClientRect().top <= 0)
      setCurrentSection(() => ['work'])
    else setCurrentSection(() => [])
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', setCurrent)
    return () => {
      elem.element.current.removeEventListener('scroll', setCurrent)
    }
  })

  return (
    <div className={style.work} id="work" ref={container}>
      <div className={style.container}>
        <section className={style.section}>
          <Image src={uiCircle} alt="ADD DESCRIPTION" className={style.img} />
          <h2>projects</h2>
        </section>
        <section className={style.section}>
          <Image
            src={illustrationCircle}
            alt="ADD DESCRIPTION"
            className={style.img}
          />
          <h2>ui library</h2>
        </section>
        <section className={style.section}>
          <Image
            src={fineArtCircle}
            alt="ADD DESCRIPTION"
            className={style.img}
          />
          <h2>art</h2>
        </section>
      </div>
    </div>
  )
}

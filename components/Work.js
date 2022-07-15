import style from '../styles/work.module.css'
import Image from 'next/image'
import uxUiCircle from '../public/images/home/ux-ui-circle.png'
import illustrationCircle from '../public/images/home/illustration-circle.png'
import fineArtCircle from '../public/images/home/fine-art-circle.png'
import { useRef, useEffect, useContext } from 'react'
import MenuCtx from './MenuCtx'
import Link from 'next/link'

export default function Work(elem) {
  // need to move this navbar stuff to index or navbar component
  const workContainer = useRef(null)
  const { currentSection, setCurrentSection } = useContext(MenuCtx)

  const setCurrent = () => {
    if (
      workContainer.current.getBoundingClientRect().top <= 0 &&
      !currentSection.includes('work')
    )
      setCurrentSection((arr) => [...arr, 'work'])
    else setCurrentSection((arr) => arr.filter((item) => item !== 'work'))
    // console.log(elem.element.current.getBoundingClientRect())
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', setCurrent)
    return () => {
      elem.element.current.removeEventListener('scroll', setCurrent)
    }
  })
  // END this stuff

  return (
    <div className={style.work} id="work" ref={workContainer}>
      <div className={style.container}>
        <section className={style.section}>
          <Image src={uxUiCircle} alt="" className={style.img} />
          <h2>ux/ ui</h2>
        </section>
        <section className={style.section}>
          <Image src={illustrationCircle} alt="" className={style.img} />
          <h2>illustration</h2>
        </section>
        <section className={style.section}>
          <Link href="/fine-art" passHref>
            <a>
              <Image src={fineArtCircle} alt="" className={style.img} />
            </a>
          </Link>
          <h2>fine art</h2>
        </section>
      </div>
    </div>
  )
}

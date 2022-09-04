import Image from 'next/image'
import style from '../../styles/home/hero.module.scss'
import star from '../../public/images/star.svg'

export default function Hero() {
  return (
    <div className={style.hero} id="home">
      <div className={style.heroText}>
        <i className={style.star}>
          <Image src={star} width={21} height={38} alt="" aria-hidden="true" />
        </i>
        <h1 className={style.heading}>aadila chand</h1>
        <h2 className={style.subheading}>conceptual design</h2>
      </div>
    </div>
  )
}

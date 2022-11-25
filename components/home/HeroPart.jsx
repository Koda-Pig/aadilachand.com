import Image from 'next/image'
import star from '../../public/images/star.svg'
import styles from '../../styles/home/hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero} id="home">
      <div className={styles.heroText}>
        <i className={styles.star}>
          <Image src={star} width={21} height={38} alt="" aria-hidden="true" />
        </i>
        <h1 className={styles.heading}>aadila chand</h1>
        <h2 className={styles.subheading}>conceptual design</h2>
      </div>
    </div>
  )
}

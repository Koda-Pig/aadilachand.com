import Image from 'next/image'
import styles from '../../styles/ux-ui/tune/tuneIntro.module.scss'
import tuneScreenshotImg from '../../public/images/ux-ui/tune/tune-iphones.png'

export default function TuneIntro() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Image src={tuneScreenshotImg} quality={100} alt="" />
        </div>
        <div className={styles.writeUp}>
          <h3>concept</h3>
          <p>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility
          </p>
          <h3>inspired by</h3>
          <p>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse
          </p>
          <h3>my role</h3>
          <p>Permanence of the stars circumnavigated consciousness</p>
          <a href="" className={styles.callToAction}>
            try prototype
          </a>
        </div>
      </div>
    </>
  )
}

import Image from 'next/image'
import ReadMore from '../ReadMore'
import styles from '../../styles/ux-ui/tune/tuneDetails.module.scss'
import tuneScreenshotImg from '../../public/images/ux-ui/tune/tune-screenshot.png'

export default function TuneDetails() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.writeUp}>
          <h3>key feature</h3>
          <p>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy
          </p>
          <ReadMore>
            <p>
              Permanence of the stars circumnavigated consciousness the ash of
              stellar alchemy Sea of Tranquility muse about
            </p>
            <p>
              Permanence of the stars circumnavigated consciousness the ash of
              stellar alchemy Sea of
            </p>
          </ReadMore>
          <a href="" className={styles.callToAction}>
            full project
          </a>
        </div>
        <div>
          <Image src={tuneScreenshotImg} quality={100} alt="" />
        </div>
      </div>
    </>
  )
}

import Image from 'next/image'
import homeImg from '../../public/images/ux-ui/tune/tune-home-screenshot.png'
import myAccountImg from '../../public/images/ux-ui/tune/tune-my-account-screenshot.png'
import styles from '../../styles/ux-ui/tune/tuneDetails.module.scss'

export default function TuneDetails() {
  return (
    <>
      <a href="" className={styles.callToActionPrototype}>
        prototype
      </a>
      <div className={styles.container}>
        <div>
          <Image src={homeImg} quality={100} alt="" />
        </div>
        <div>
          <Image src={myAccountImg} quality={100} alt="" />
        </div>
        <div className={styles.writeUp}>
          <h3>inspired by</h3>
          <p>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse about
          </p>
          <h3>inspired by</h3>
          <p>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse about
          </p>
          <h3>inspired by</h3>
          <p>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse about
          </p>
          <a href="" className={styles.callToActionFullFile}>
            full project
          </a>
        </div>
      </div>
    </>
  )
}

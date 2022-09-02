import Image from 'next/image'
import phoneImg from '../../public/images/ux-ui/vibe/screen-labeled.png'
import style from '../../styles/ux-ui/vibe/vibeIntro.module.scss'

export default function VibeIntro() {
  return (
    <>
      <div className={style.container}>
        <div className={style.writeup}>
          <h2>
            Community &amp; <br />
            Connection
          </h2>
          <p>
            <strong>problem</strong>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse about Sea of Tranquility
            muse about
          </p>
          <p>
            <strong>concept</strong>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse about Sea of Tranquility
            muse about
          </p>
          <p>
            <strong>my role</strong>
            Permanence of the stars circumnavigated consciousness the ash of
            stellar alchemy Sea of Tranquility muse about Sea of Tranquility
            muse about
          </p>
        </div>
        <div className={style.img}>
          <Image src={phoneImg} quality={100} alt="" />
        </div>
      </div>
    </>
  )
}

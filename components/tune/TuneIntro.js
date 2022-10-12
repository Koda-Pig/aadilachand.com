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
            Mock up of a music library with personalized recomendations and data
            based on your listening habits
          </p>
          <h3>inspired by</h3>
          <p>
            Vintage Vinyl; classic with a futuristic twist. Combining elements
            of brutalism and glassmorphism
          </p>
          <h3>my role</h3>
          <p>user experience design; user interface design, graphic design</p>
          <a
            href="https://www.figma.com/file/D0eKwPPaAtiAlZNGTc9B4f/tune?node-id=1032%3A4471"
            target="_blank"
            rel="noreferrer"
            className={styles.callToAction}
          >
            try prototype
          </a>
        </div>
      </div>
    </>
  )
}

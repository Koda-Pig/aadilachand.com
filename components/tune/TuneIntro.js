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
            href="https://www.figma.com/proto/D0eKwPPaAtiAlZNGTc9B4f/tune?page-id=99%3A585&node-id=1686%3A5092&viewport=814%2C2014%2C0.21&scaling=scale-down&starting-point-node-id=1723%3A4505&show-proto-sidebar=1"
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

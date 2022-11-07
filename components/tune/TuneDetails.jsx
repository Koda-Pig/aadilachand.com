import Image from 'next/image'
import ReadMore from '../ReadMore'
import styles from '../../styles/ux-ui/tune/tuneDetails.module.scss'
import tuneScreenshotImg from '../../public/images/ux-ui/tune/tune-screenshot.png'

export default function TuneDetails() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.writeUp}>
          <h3>key features</h3>
          <p>
            What sets tune apart from other music libraries is the data card
            selection. Tune collects and creates a visual display of your
            listening habits.
          </p>
          <ReadMore>
            <p>
              This includes an option between weekly, monthly, and yearly
              overviews of your top songs, albums, and artists. Tune also
              displays your listening habits as a pie chart of your favourite
              genres and a graph of your listening hours. This feature is
              similar to Spotify Wrapped, except one can access it all year
              round.
            </p>
            <p>
              While this feature isn&apos;t essential to listening, it does add
              a personal dimension to avid listeners and music connoisseurs.
            </p>
          </ReadMore>
          <a
            href="https://www.figma.com/file/D0eKwPPaAtiAlZNGTc9B4f/tune?node-id=1032%3A4471"
            target="_blank"
            rel="noreferrer"
            className={styles.callToAction}
          >
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

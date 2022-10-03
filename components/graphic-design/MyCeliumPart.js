import Image from 'next/image'
import ReadMore from '../ReadMore'
import styles from '../../styles/graphic-design/myCelium.module.scss'
import myCelium1 from '../../public/images/graphic-design/my-celium/my-celium-1c.png'
import myCelium2 from '../../public/images/graphic-design/my-celium/my-celium-2c.png'
import myCelium3 from '../../public/images/graphic-design/my-celium/my-celium-3c.png'

const images = [myCelium1, myCelium2, myCelium3]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} alt="" />
})

export default function MyCelium() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.gallery}>{imageGallery}</div>
      </section>
      <section className={styles.writeUp}>
        <div>
          <h2>my.celium</h2>
        </div>
        <div>
          <p>
            A biomorphic integration of art, science and tradition. Inspired by
            traditional indian woodblock art and microbiology.
          </p>
          <ReadMore>
            <p>
              Weaving my heritage into my admiration for science to create my
              very own culture of microscopic eco-systems. This is what I would
              imagine the cells of my soul to look like.
            </p>
            <p>
              Using hand-drawn, botanical mandalas as the base-line pattern,
              this is but the first collection of an endless array of
              possibilities.
            </p>
            <p>
              My future vision for this project is to create biomorphic
              generative works, coding them to life through collaboartion.
              (Hover over artworks to see more)
            </p>
          </ReadMore>
        </div>
        <div>
          <a
            href="https://www.figma.com/file/ejRlzP6G4HsbxR4Zf2wH1r/Biomorphic-Design?node-id=0%3A1"
            target="_blank"
            rel="noreferrer"
            className={styles.callToAction}
          >
            full project
          </a>
        </div>
      </section>
    </div>
  )
}

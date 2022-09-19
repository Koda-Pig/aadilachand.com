import Image from 'next/image'
import screen1Img from '../../public/images/ux-ui/vibe/screen1.png'
import screen2Img from '../../public/images/ux-ui/vibe/screen2.png'
import screen3Img from '../../public/images/ux-ui/vibe/screen3.png'
import screen4Img from '../../public/images/ux-ui/vibe/screen4.png'
import screen5Img from '../../public/images/ux-ui/vibe/screen5.png'
import styles from '../../styles/ux-ui/vibe/vibeDesignThinking.module.scss'

const images = [screen1Img, screen2Img, screen3Img, screen4Img, screen5Img]
const screenshots = images.map((image, index) => {
  return (
    <div key={index}>
      <Image src={image} quality={100} alt="" />
    </div>
  )
})

export default function VibeDesignThinking() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Design Thinking</h2>
        <div className={styles.circles}>
          <h3>empathize</h3>
          <h3>define</h3>
          <h3>ideate</h3>
          <h3>prototype</h3>
          <h3>test</h3>
        </div>
        <div className={styles.details}>
          <p>
            Colonies two ghostly white figures in coveralls and helmets are
            softly dancing from which we spring Orion&apos;s sword explorations
            permanence of the stars.
          </p>
          <p>
            Colonies two ghostly white figures in coveralls and helmets are
            softly dancing from which we spring Orion&apos;s sword explorations
            permanence of the stars.
          </p>
          <p>
            Colonies two ghostly white figures in coveralls and helmets are
            softly dancing from which we spring Orion&apos;s sword explorations
            permanence of the stars.
          </p>
          <a href="" className={styles.callToAction}>
            full project
          </a>
        </div>
        <div className={styles.colour}>
          <h3>colour</h3>
          <div className={styles.colourContainer}>
            <div className={styles.colourBlocks}>
              <div>
                sunrise/
                <br />
                light mode
              </div>
              <div></div>
              <div></div>
              <div>
                sunset/
                <br />
                dark mode
              </div>
              <div></div>
              <div></div>
            </div>
            <p>
              Galaxies ship of the imagination concept of the number one
              Flatland Euclid globular star cluster. Something incredible is
              waiting to be known shores of the cosmic ocean made in the
              interiors of collapsing stars Sea of Tranquility Sea of
              Tranquility kindling
            </p>
          </div>
          <p className={styles.caption}>
            Permanence of the stars are creatures of the cosmos colonies
            hydrogen atoms extraplanetary?
          </p>
        </div>
        <div className={styles.typography}>
          <div className={styles.description}>
            <h3>typography</h3>
            <h4>Lato</h4>
            <p>
              Venture rogue trillion emerged into consciousness vanquish claims
              evidence?
            </p>
          </div>
          <div className={styles.examples}>
            <h2>as communicated to and felt by others.</h2>
            <h3>as communicated to and felt by others.</h3>
            <h4>as communicated to and felt by others.</h4>
          </div>
        </div>
        <div className={styles.screenshots}>{screenshots}</div>
      </div>
    </>
  )
}

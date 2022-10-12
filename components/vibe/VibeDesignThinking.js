import Image from 'next/image'
import ReadMore from '../ReadMore'
import screenshotsImg from '../../public/images/ux-ui/vibe/screenshots.png'
import styles from '../../styles/ux-ui/vibe/vibeDesignThinking.module.scss'

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
          <div>
            <p>
              Certain groups find that social environments can be stressful,
              overwhelming and draining making it hard to integrate in social
              settings and thus isolate themselves.
            </p>
            <ReadMore>
              <p>
                They require time to process conversations in order to respond
                authentically and may resort to using social media to find a
                sense of belonging- which is fundamental to human nature.
              </p>
            </ReadMore>
          </div>
          <p>
            Social media has negative side effects but it is currently one of
            the few ways in which people can virtually connect and access
            relevant information.
          </p>
          <p>
            People could benefit from having a platform where they can keep up
            to date with happenings and shared interests but not be weighted by
            the negative aspects of social media.
          </p>
          <a
            href="https://www.figma.com/file/4iMvRt0sYN0whHpvewqgtM/vibe?node-id=865%3A1436"
            className={styles.callToAction}
            rel="noreferrer"
            target="_blank"
          >
            full project
          </a>
        </div>
        <div className={styles.colour}>
          <h2>colour</h2>
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
            <div>
              <p>
                Inspired by a summer&apos;s sunset to create a safe and soothing
                environment. This familiar colour scheme evokes feelings of
                nostalgia and ease geared towards making meaningful connections
                comfortably.
              </p>
              <ReadMore>
                <p>
                  Like other browns, tan evokes warmth and security and gives a
                  sense of earthly stability while the hints of purple add
                  feelings of mystery and curiosity creating a sense of
                  discovery.
                </p>
                <p>
                  The neutral tones make content easier to consume for those
                  with sensory processing disorders.
                </p>
              </ReadMore>
            </div>
          </div>
        </div>
        <div className={styles.typography}>
          <div className={styles.description}>
            <h2>typography</h2>
            <h4>Lato</h4>
            <p>
              Legible and readable, making content accessible to a wide range of
              users
            </p>
          </div>
          <div className={styles.examples}>
            <h2>as communicated to and felt by others.</h2>
            <h3>as communicated to and felt by others.</h3>
            <h4>as communicated to and felt by others.</h4>
          </div>
        </div>
        <div className={styles.screenshots}>
          <Image src={screenshotsImg} quality={100} alt="" />
        </div>
        <div className={styles.takeAway}>
          <p>
            <h2>take-away</h2>
            <p>
              I have only just scraped the surface, exploring a basic solution
              for social integration and laying down the scaffolding of this
              project. Here are some ways I would want to improve and expand on
              this project:
            </p>
          </p>
          <p>
            <h2>&#8203;</h2>
            <p>
              To elaborate on this project, I would make certain features more
              accessible, found in the dot settings menu on the top right
              corner. The features would include:
            </p>
            <p>
              <ol>
                <li>The option to switch to light or dark mode. </li>
                <li>
                  The option to change text style to a font more accommodating
                  to those with dyslexia.
                </li>
                <li>
                  Improved accessibility for screen readers, for those with
                  visual impairments.
                </li>
                <li>A microphone feature for those with motor impairments.</li>
              </ol>
            </p>
            <ReadMore>
              <p>
                The next improvement I would consider is adding labels on the
                navigation bars. While I tried to keep to a minimalist approach,
                bearing in mind the potential cognitive overload; so as to not
                overwhelm the user, since the app is densed with features. It is
                important to consider whether this creates ambiguity and
                confusion due to lack of clarity. It would be wrong to make the
                assumption that everyone is familiar with the meaning of these
                icons; however cognitive load is a very important consideration
                when designing for neurodiversity. Perhaps an in-depth
                onboarding with full explanations would be sufficient. Weighing
                out the pro&apos;s and con&apos;s on clarity vs reduced
                cognitive load can be resolved through a series of user testing.
              </p>
            </ReadMore>
          </p>
        </div>
      </div>
    </>
  )
}

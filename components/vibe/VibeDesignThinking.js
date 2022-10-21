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
              overwhelming, and draining making it hard to integrate into social
              settings and thus isolate themselves.
            </p>
            <ReadMore>
              <p>
                They require time to process conversations to respond
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
            href="https://www.figma.com/file/7yrjsxptRh6sSD4du5PbH1/Vibe-Case-Study-%2B-Prototype?node-id=865%3A1436"
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
                Inspired by a summer&apos;s sunset creating a safe and soothing
                environment. This familiar colour scheme evokes feelings of
                comfort, nostalgia and ease.
              </p>
              <ReadMore>
                <p>
                  Like other browns, tan evokes warmth, security and a sense of
                  earthly stability, while the hints of purple add feelings of
                  mystery and curiosity promoting the idea of discovery
                </p>
                <p>
                  The neutral tones make it easier to consume content for those
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
        <div className={styles.retrospect}>
          <p>
            <h2>retrospect</h2>
            <p>
              A takeaway of ways in which I would want to expand and improve
              this project:
            </p>
          </p>
          <p>
            <h2>&#8203;</h2>

            <ul>
              <li>A more detailed onboarding with tooltips and guidelines.</li>
              <li>
                Expanding on accessibility options to include customizable text
                size and weight with the option to switch to a more
                dyslexia-friendly font.
              </li>
              <li>
                Thinking further ahead, the most important consideration would
                be ways to regulate the platform to ensure it is safe.
              </li>

              <ReadMore>
                <li>
                  Adding labels on the navigation bars. I tried to keep to a
                  minimalist approach, bearing in mind the potential cognitive
                  overload; to not overwhelm the user, since the app is dense
                  with features. It is important to consider whether this
                  creates ambiguity and confusion due to a lack of clarity. It
                  would be wrong to assume that everyone is familiar with the
                  meaning of these icons; however cognitive load is an important
                  consideration when designing for neurodiversity. Weighing out
                  the pros and cons on clarity vs reduced cognitive load could
                  be resolved through a series of user testing.
                </li>
              </ReadMore>
            </ul>
          </p>
        </div>
      </div>
    </>
  )
}

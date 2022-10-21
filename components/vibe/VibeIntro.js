import Image from 'next/image'
import styles from '../../styles/ux-ui/vibe/vibeIntro.module.scss'
import phoneImg from '../../public/images/ux-ui/vibe/screen-labeled.png'
import ReadMore from '../ReadMore'

export default function VibeIntro() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.writeup}>
          <p>
            <h2>problem</h2>
            <p>
              As illustrated in&nbsp;
              <a
                href="https://www.thesocialdilemma.com"
                target="_blank"
                rel="noreferrer"
              >
                <em>The Social Dilemma</em>
              </a>
              &nbsp;(2020), social media is known to have negative effects on
              our mental health. It is designed to harvest data that encourages
              addictive behaviors using algorithms that create feedback loops.
            </p>
            <ReadMore>
              <p>
                This has the dangerous power to manipulate people and spread
                misinformation. Over extended periods, this behavior becomes
                normalized but creates damage behind the scenes of one&apos;s
                psyche.
              </p>
              <p>
                While this fundamental aspect of social media is problematic, it
                is also important to acknowledge the positive attributes of
                social media. For example, certain groups (such as those who are
                introverted, neurodiverse or struggle with social anxiety) have
                difficulties in social environments but find a sense of
                belonging on these platforms.
                <br />
                <br />
                An{' '}
                <a
                  href="https://www.autismspeaks.org/science-news/social-media-offers-benefits-autistic-community"
                  target="_blank"
                  rel="noreferrer"
                >
                  interview
                </a>{' '}
                with people on the spectrum showed that social media granted
                them the opportunity to integrate into society through a virtual
                world. While this is a helpful tool for some, the underlying
                adverse effects still weigh in.
              </p>
            </ReadMore>
          </p>
          <p>
            <h2>solution</h2>
            <p>
              Vibe aims to be a user-centric resource rather than a social media
              platform, focused on keeping up-to-date with interests and finding
              out about events.
            </p>
            <ReadMore>
              <p>
                The home page allows for the user to have more control over the
                content they consume by having three options:
                <ol>
                  <li>
                    <strong>recent</strong> - all content and updates from
                    friends and communities.
                  </li>
                  <li>
                    <strong>explore</strong> - new content; similar to their
                    current engagement and interests.
                  </li>
                  <li>
                    <strong>community</strong> - the option to completely
                    streamline into only seeing content from their communities.
                  </li>
                </ol>
                <br />
                <p>
                  The app uses word tags and imagery for easier scanibility,
                  reducing cognitive overload. The calendar feature in the
                  personal dashboard provides an overview of events and
                  obligations reducing forgetfulness and social burn-out.
                </p>
              </p>
              <p>
                Computer scientist, Jaron Lanier sums it up very well; <br />
                <quote>
                  <em>
                    “I very strongly feel that we can isolate the good parts of
                    social media which are very real and very true and just cut
                    off and incinerate the bad parts, and the bad parts can be
                    described very clearly as a manipulation engine… And
                    that&apos;s the thing that needs to be shut down.”
                  </em>
                </quote>
              </p>
            </ReadMore>
          </p>
        </div>
        <div className={styles.mockup}>
          <h2>Community &amp; Connection</h2>
          <div className={styles.img}>
            <Image src={phoneImg} quality={100} alt="" />
          </div>
          <div className={styles.role}>
            <p>
              <h3>my role</h3>
              user research, empathy mapping, creating user personas, site
              mapping, wireframing, user experience and user interface design
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

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
              As illustrated in <em>The Social Dilemma</em> (2020), social media
              is known to have negative effects on our mental health. It is
              designed to harvest data that encourages addictive behaviors using
              algorithms that create feedback loops.
            </p>
            <ReadMore>
              <p>
                This is especially dangerous as it has the power to manipulate
                people and spread misinformation. Over long periods of time this
                behavior becomes normalized but creates damage behind the scenes
                of one&apos;s psyche.
              </p>
              <p>
                While this aspect of social media is heavily ingrained in the
                functioning of the platforms, it is also important to look at
                the positive attributes social media has. For example, certain
                groups (such as those who are introverted, neurodiverse or
                struggle with social anxiety) have difficulties in social
                environments. They have a tendency to withdraw and isolate
                because the pace of standard socializing can be draining and
                overwhelming. They require time to process conversations in
                order to respond authentically. In a study interviewing people
                on the spectrum, people have reported that social media has
                granted them the opportunity to integrate within society through
                a virtual world. While they are able to do this, the underlying
                negative effects of social media start to weigh in.
              </p>
            </ReadMore>
          </p>
          <p>
            <h2>solution</h2>
            <p>
              Vibe aims to be a tool/ resource rather than a social media
              platform. A place to keep up with current interests through shared
              community pages as well as find out about relevant events and
              happenings within one&apos;s field of interests.
            </p>
            <ReadMore>
              <p>
                Vibe aims to be more of a tool/ resource instead of a social
                media platform. A place to keep up with current interests
                through shared community pages as well as find out about
                relevant events and happenings within one&apos;s field of
                interests.
              </p>
              <p>
                In order to be more accommodating to the groups mentioned, there
                is a personal dashboard feature that acts as a calendar and
                personal archive. The calendar feature is especially useful
                because it allows one an overview of events and obligations, so
                as to not overcommit and feel burnt out by it.
              </p>
              <p>
                The home page allows for the user has more control over the
                content they consume by having three options:
                <ol>
                  <li>
                    recent - to see all content and updates from friends and
                    communities.
                  </li>
                  <li>
                    explore - to see new content that is similar to their
                    current engagement and interests.
                  </li>
                  <li>
                    community - the option to completely streamline into only
                    seeing content from their communities.
                  </li>
                </ol>
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
              user research, empathy mapping, user personas, site mapping/ basic
              information architecture, wireframing, ui and ux design
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

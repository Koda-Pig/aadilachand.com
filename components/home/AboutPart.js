import styles from '../../styles/home/about.module.scss'

export default function AboutPart() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <section className={styles.section}>
          <h2>an intentional approach</h2>
          <p>
            As the world paves a fairly new path within the digital realm,
            designers are offered the chance to create a meaningful space that
            can weave together previous divides and grow toward a diverse
            future.
          </p>
          <p>
            My approach to design is to think in increments and consider how
            smaller parts can sum up to a greater whole. Understanding that
            everything one interacts with leaves an impression, design has the
            power to ripple out into positive changes at a larger scale. Through
            clean and intentional design, we can plant subtle seeds of
            sustainability and inclusivity.
          </p>
        </section>
      </div>
    </div>
  )
}

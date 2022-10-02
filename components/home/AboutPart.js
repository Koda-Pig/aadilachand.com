import styles from '../../styles/home/about.module.scss'

export default function AboutPart() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <section className={styles.section}>
          <h2>an intentional approach</h2>
          <p>
            As the world paves a fairly new path within the digital realm,
            designers are offered the chance to create a more meaningful space.
            A space that can weave together previous divides and grow towards a
            diverse future. Through clean and intentional design, can we plant
            subtle seeds of sustainability and inclusivity that has the power to
            reach a greater impact.
          </p>
          <p>
            My approach to design is thinking in increments and considering how
            smaller parts can sum up to a greater-whole. Understanding that
            everything one interacts with leaves an impression, design has the
            power to ripple out into positive changes at a larger scale.
          </p>
        </section>
      </div>
    </div>
  )
}

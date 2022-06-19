import style from '../styles/about.module.css'

export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.container}>
        <section className={style.section}>
          <h2>an intentional approach</h2>
          <p>
            as the digital age grows, designers hold power in the vision of our
            future. it is our responsibility to find solutions that encourages
            connection and for care the world, rather than a disconnect. it is
            important to create a digital environment that embodies and nutures
            these values.
          </p>
          <p>
            what we feed into our minds ultimately dictates our reality and
            perception of the world. every little interaction contributes to
            this, through clean and intentional design and thinking in
            increments, we can design a sustainable future.
          </p>
        </section>
      </div>
    </div>
  )
}

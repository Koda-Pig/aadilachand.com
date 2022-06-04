import style from '../styles/about.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.container}>
        <section className={style.section}>
          <h2>conceptual design</h2>
          <p>
            environment contiunues to degrade, there is a need for a more
            sustainable mindset all-around somethimh somETHINH
          </p>
          <p>
            given that everything we interactact with seeps into our subconcous
            and ripples outwards into other aspects of our life, it is important
            to consider the natural world within a digital frame.&nbsp;
            <Link href="#" passHref>
              <a className={style.link}>read more</a>
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}
